export type Sport = 'NFL' | 'NBA' | 'MLB' | 'NHL' | 'NCAAF' | 'NCAAB' | 'Soccer' | 'MMA';
export type PickType = 'spread' | 'moneyline' | 'total' | 'prop';
export type PickResult = 'win' | 'loss' | 'push' | 'void' | 'pending';
export type SubscriptionPlan = 'free' | 'pro' | 'vip';
export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing';
export type RiskTolerance = 'low' | 'medium' | 'high';
export type Outcome = 'win' | 'loss' | 'push' | 'void' | 'skipped';

export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  sport_prefs: Sport[];
  risk_tolerance: RiskTolerance;
  telegram_id?: number;
  created_at: string;
  updated_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  stripe_customer_id: string;
  stripe_sub_id?: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  current_period_end?: string;
  cancel_at_period_end: boolean;
}

export interface Pick {
  id: string;
  sport: Sport;
  event_id: string;
  home_team: string;
  away_team: string;
  pick_type: PickType;
  pick_value: string;
  odds: number;
  confidence: number;
  tier_required: SubscriptionPlan;
  model_primary: string;
  model_secondary?: string;
  consensus_score?: number;
  reasoning?: string; // VIP only
  prompt_hash: string;
  event_start_at: string;
  lock_at: string;
  locked: boolean;
  result?: PickResult;
  result_resolved_at?: string;
  created_at: string;
}

export interface UserPick {
  id: string;
  user_id: string;
  pick_id: string;
  stake?: number;
  outcome?: Outcome;
  notes?: string;
  logged_at: string;
  pick?: Pick;
}

export interface AnalyticsSnapshot {
  id: string;
  user_id: string;
  snapshot_date: string;
  total_picks: number;
  wins: number;
  losses: number;
  pushes: number;
  win_rate?: number;
  roi_percent?: number;
  streak: number;
  by_sport: Record<Sport, { wins: number; losses: number; pushes: number }>;
}

export interface PickGenerationResult {
  pick: Omit<Pick, 'id' | 'created_at'>;
  primary_analysis: string;
  secondary_analysis?: string;
  consensus_score: number;
}
