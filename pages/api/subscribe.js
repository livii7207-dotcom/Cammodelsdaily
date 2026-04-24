export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });

  const { MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, MAILCHIMP_SERVER } = process.env;

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER) {
    console.error('Mailchimp env vars not set');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const response = await fetch(
    `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `apikey ${MAILCHIMP_API_KEY}`,
      },
      body: JSON.stringify({ email_address: email, status: 'subscribed' }),
    }
  );

  if (!response.ok) {
    const data = await response.json();
    if (data.title === 'Member Exists') {
      return res.status(200).json({ message: 'Already subscribed' });
    }
    return res.status(400).json({ error: data.detail || 'Subscription failed' });
  }

  return res.status(200).json({ message: 'Subscribed' });
}
