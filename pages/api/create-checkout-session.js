import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Creates a Stripe Connect payment session.
 *
 * Flow:
 *  1. Viewer pays via this session
 *  2. Platform keeps 15% via application_fee_amount
 *  3. 85% transfers to the model's connected Stripe account
 *
 * Requires models to complete Stripe Connect onboarding first.
 * See: https://stripe.com/docs/connect/collect-then-transfer-guide
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { amount, modelAccountId, description } = req.body;

  if (!amount || !modelAccountId) {
    return res.status(400).json({ error: 'amount and modelAccountId are required' });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const platformFee = Math.round(amount * 0.15);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: description || 'CamModelsDaily Session' },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      payment_intent_data: {
        application_fee_amount: platformFee,
        transfer_data: { destination: modelAccountId },
      },
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
