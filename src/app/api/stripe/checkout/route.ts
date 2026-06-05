import { createCheckoutSession } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({ plan: z.enum(['pro', 'vip']) })

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json() as { plan: string }
  const { plan } = schema.parse(body)
  const session = await createCheckoutSession(user.id, user.email!, plan, process.env.NEXT_PUBLIC_APP_URL!)
  return NextResponse.json({ url: session.url })
}
