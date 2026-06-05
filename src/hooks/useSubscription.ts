'use client'
import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'
import type { Subscription } from '@/types'

export function useSubscription(userId?: string) {
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) return
    const supabase = createClient()
    supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .single()
      .then(({ data }) => {
        setSubscription(data)
        setLoading(false)
      })
  }, [userId])

  return { subscription, loading, plan: subscription?.plan ?? 'free' }
}
