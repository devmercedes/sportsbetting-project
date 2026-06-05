import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
  typescript: true,
});

export const PLANS = {
  free: {
    name: 'Free',
    price: 0,
    priceId: null,
    features: ['1 pick per day', 'Basic dashboard'],
  },
  pro: {
    name: 'Pro',
    price: 29,
    priceId: process.env.STRIPE_PRO_PRICE_ID!,
    features: ['All picks', 'Analytics', 'CSV export', 'Email alerts'],
  },
  vip: {
    name: 'VIP',
    price: 79,
    priceId: process.env.STRIPE_VIP_PRICE_ID!,
    features: ['All Pro features', 'Early access', 'AI Reasoning', 'Telegram'],
  },
} as const;

export async function createCheckoutSession(
  userId: string,
  email: string,
  plan: 'pro' | 'vip',
  returnUrl: string
) {
  const planConfig = PLANS[plan];
  const session = await stripe.checkout.sessions.create({
    customer_email: email,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: planConfig.priceId, quantity: 1 }],
    success_url: `${returnUrl}/settings?upgraded=true`,
    cancel_url: `${returnUrl}/settings`,
    metadata: { userId, plan },
  });
  return session;
}

export async function createPortalSession(customerId: string, returnUrl: string) {
  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${returnUrl}/settings`,
  });
}
