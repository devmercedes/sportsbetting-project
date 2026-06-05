#!/bin/bash
# Run once to create Stripe products and prices
# Requires Stripe CLI: https://stripe.com/docs/stripe-cli

echo "Creating Sports Betting AI SaaS products..."

# Pro Plan
PRO_PRODUCT=$(stripe products create \
  --name="Pro Plan" \
  --description="All picks, analytics, CSV export, email alerts" \
  --json | jq -r '.id')

PRO_PRICE=$(stripe prices create \
  --product="$PRO_PRODUCT" \
  --unit-amount=2900 \
  --currency=usd \
  --recurring[interval]=month \
  --json | jq -r '.id')

echo "Pro Price ID: $PRO_PRICE"

# VIP Plan
VIP_PRODUCT=$(stripe products create \
  --name="VIP Plan" \
  --description="Early access, AI reasoning, Telegram delivery, all Pro features" \
  --json | jq -r '.id')

VIP_PRICE=$(stripe prices create \
  --product="$VIP_PRODUCT" \
  --unit-amount=7900 \
  --currency=usd \
  --recurring[interval]=month \
  --json | jq -r '.id')

echo "VIP Price ID: $VIP_PRICE"
echo ""
echo "Add these to your .env.local:"
echo "STRIPE_PRO_PRICE_ID=$PRO_PRICE"
echo "STRIPE_VIP_PRICE_ID=$VIP_PRICE"
