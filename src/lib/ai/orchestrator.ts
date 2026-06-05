import Anthropic from '@anthropic-ai/sdk'
import OpenAI from 'openai'
import crypto from 'crypto'
import { PickGenerationResult, Sport } from '@/types'

function getAnthropic() {
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })
}

function getOpenAI() {
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })
}

const SPORT_SYSTEM_PROMPTS: Record<Sport, string> = {
  NFL: 'You are an expert NFL analyst with 20+ years experience. Analyze matchups considering: offensive/defensive rankings, injury reports, home/away splits, weather, line movement, and recent form.',
  NBA: 'You are an expert NBA analyst. Focus on: pace, efficiency ratings, back-to-back fatigue, travel, lineup news, and referee tendencies.',
  MLB: 'You are an expert MLB analyst. Consider: starting pitching, bullpen usage, park factors, platoon advantages, weather, and umpire tendencies.',
  NHL: 'You are an expert NHL analyst. Analyze: goaltending matchups, power play efficiency, back-to-back situations, and recent shooting percentages.',
  NCAAF: 'You are an expert college football analyst. Focus on: recruiting talent gaps, home field advantage, coaching tendencies, and conference strength.',
  NCAAB: 'You are an expert college basketball analyst. Consider: tempo, three-point reliance, road performance, and conference familiarity.',
  Soccer: 'You are an expert soccer/football analyst. Analyze: form, expected goals, defensive structure, European competition fatigue, and referee tendencies.',
  MMA: 'You are an expert MMA analyst. Consider: fighting styles, reach, takedown defense, recent performance, and training camp reports.',
}

interface ClaudePickResult {
  pick: string
  pick_type: string
  confidence: number
  reasoning: string
}

interface GPTPickResult {
  pick: string
  confidence: number
}

interface EventContext {
  home_team: string
  away_team: string
  sport: Sport
  odds: { spread?: number; moneyline?: { home: number; away: number }; total?: number }
  stats: Record<string, unknown>
}

async function analyzeWithClaude(event: EventContext): Promise<ClaudePickResult> {
  const systemPrompt = SPORT_SYSTEM_PROMPTS[event.sport]
  const userPrompt = `Analyze this ${event.sport} matchup and provide your best pick.

Matchup: ${event.home_team} vs ${event.away_team}
Current Odds: ${JSON.stringify(event.odds)}
Stats: ${JSON.stringify(event.stats, null, 2)}

Respond ONLY with valid JSON in this exact format:
{
  "pick": "description of the pick e.g. 'Chiefs -3.5' or 'Over 47.5'",
  "pick_type": "spread|moneyline|total|prop",
  "confidence": 65,
  "reasoning": "detailed analysis explaining the pick"
}`

  const response = await getAnthropic().messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  })

  const text = response.content[0].type === 'text' ? response.content[0].text : ''
  return JSON.parse(text.replace(/```json\n?|\n?```/g, '').trim()) as ClaudePickResult
}

async function analyzeWithGPT(event: EventContext): Promise<GPTPickResult> {
  const systemPrompt = SPORT_SYSTEM_PROMPTS[event.sport]
  const response = await getOpenAI().chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Analyze: ${event.home_team} vs ${event.away_team}. Odds: ${JSON.stringify(event.odds)}. Stats: ${JSON.stringify(event.stats)}. Return JSON: {"pick": "...", "confidence": 65}` },
    ],
    response_format: { type: 'json_object' },
  })
  return JSON.parse(response.choices[0].message.content ?? '{}') as GPTPickResult
}

export async function generatePick(event: EventContext): Promise<PickGenerationResult> {
  const promptHash = crypto
    .createHash('sha256')
    .update(`${event.sport}:${event.home_team}:${event.away_team}:${JSON.stringify(event.odds)}`)
    .digest('hex')

  const [primaryResult, secondaryResult] = await Promise.allSettled([
    analyzeWithClaude(event),
    analyzeWithGPT(event),
  ])

  const primary = primaryResult.status === 'fulfilled' ? primaryResult.value : null
  const secondary = secondaryResult.status === 'fulfilled' ? secondaryResult.value : null

  if (!primary) throw new Error('Primary AI model failed to generate pick')

  let consensusScore = 0.5
  let finalConfidence = primary.confidence

  if (secondary) {
    const agree = primary.pick.toLowerCase().includes(secondary.pick.toLowerCase().split(' ')[0])
    consensusScore = agree ? 0.9 : 0.3
    finalConfidence = agree
      ? Math.min(100, Math.round((primary.confidence + secondary.confidence) / 2 * 1.1))
      : Math.round((primary.confidence + secondary.confidence) / 2 * 0.75)
  }

  return {
    pick: {
      sport: event.sport,
      event_id: `${event.home_team}-${event.away_team}`,
      home_team: event.home_team,
      away_team: event.away_team,
      pick_type: 'spread',
      pick_value: primary.pick,
      odds: -110,
      confidence: Math.max(50, Math.min(100, finalConfidence)),
      tier_required: finalConfidence >= 75 ? 'free' : 'pro',
      model_primary: 'claude-3-5-sonnet-20241022',
      model_secondary: secondary ? 'gpt-4o' : undefined,
      consensus_score: consensusScore,
      reasoning: primary.reasoning,
      prompt_hash: promptHash,
      event_start_at: new Date().toISOString(),
      lock_at: new Date(Date.now() - 3600000).toISOString(),
      locked: false,
      result: 'pending',
    },
    primary_analysis: primary.reasoning,
    secondary_analysis: secondary ? JSON.stringify(secondary) : undefined,
    consensus_score: consensusScore,
  }
}
