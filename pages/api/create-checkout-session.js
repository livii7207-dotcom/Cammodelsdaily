import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PLANS = {
  pro: { amount: 999, name: 'CamModelsDaily Pro' },
  elite: { amount: 2999, name: 'CamModelsDaily Elite' },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { planKey } = req.body;
  const plan = PLANS[planKey];
  if (!plan) return res.status(400).json({ error: 'Invalid plan' });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: plan.name },
            unit_amount: plan.amount,
            recurring: { interval: 'month' },
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/#pricing`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
