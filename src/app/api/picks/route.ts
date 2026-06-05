import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const sport = searchParams.get('sport')
  const date = searchParams.get('date') ?? new Date().toISOString().split('T')[0]

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let query = supabase
    .from('picks')
    .select('*')
    .gte('event_start_at', `${date}T00:00:00Z`)
    .lte('event_start_at', `${date}T23:59:59Z`)
    .order('confidence', { ascending: false })

  if (sport) query = query.eq('sport', sport)

  const { data, error } = await query
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ picks: data })
}
