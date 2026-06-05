import { createClient } from '@/lib/supabase/server'
import { generatePick } from '@/lib/ai/orchestrator'
import { NextResponse } from 'next/server'
import type { Sport } from '@/types'

interface GeneratePickBody {
  home_team: string
  away_team: string
  sport: Sport
  odds: Record<string, unknown>
  stats: Record<string, unknown>
}

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const body = await req.json() as GeneratePickBody
    const result = await generatePick(body)
    const { data, error } = await supabase.from('picks').insert(result.pick).select().single()
    if (error) throw error
    return NextResponse.json({ pick: data, consensus_score: result.consensus_score })
  } catch (err: unknown) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
