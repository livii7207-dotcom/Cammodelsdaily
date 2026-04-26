export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const data = req.body;
  const errors = [];

  // Save to Airtable
  if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_TABLE_NAME) {
    try {
      const atRes = await fetch(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(process.env.AIRTABLE_TABLE_NAME)}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              'Stage Name': data.stageName || '',
              'Real Name': data.realName || '',
              Email: data.email || '',
              Phone: data.phone || '',
              DOB: data.dob || '',
              Country: data.country || '',
              Experience: data.experience || '',
              Platforms: data.platforms || '',
              Equipment: data.equipment || '',
              'Heard About': data.hearAbout || '',
              Message: data.message || '',
              'Applied At': new Date().toISOString(),
            },
          }),
        }
      );
      if (!atRes.ok) errors.push('airtable');
    } catch {
      errors.push('airtable');
    }
  }

  // Send confirmation email via Resend
  if (process.env.RESEND_API_KEY && data.email) {
    try {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.CONFIRMATION_EMAIL_FROM || 'noreply@xcammodels.com',
          to: data.email,
          subject: 'Your XCamModels application was received',
          html: `
            <div style="background:#07080f;color:#e5e7eb;font-family:sans-serif;padding:40px;max-width:500px;margin:0 auto;border-radius:16px;">
              <h2 style="color:#ff1493;margin-bottom:8px;">Application Received!</h2>
              <p style="color:#9ca3af;margin-bottom:24px;">Hi ${data.stageName || data.realName},</p>
              <p style="color:#d1d5db;line-height:1.6;">
                We've got your application and our team will review it within <strong style="color:#fff;">24 hours</strong>.
                We'll follow up at <strong style="color:#fff;">${data.email}</strong> once you're approved.
              </p>
              <p style="color:#d1d5db;line-height:1.6;margin-top:16px;">
                In the meantime, check out our <a href="https://xcammodels.com/guide" style="color:#ff1493;">beginner's guide</a>
                to get ready for your first stream.
              </p>
              <p style="color:#6b7280;font-size:12px;margin-top:32px;">— The XCamModels Team</p>
            </div>
          `,
        }),
      });
      if (!emailRes.ok) errors.push('resend');
    } catch {
      errors.push('resend');
    }
  }

  // Fallback to Formspree if no Airtable configured or it failed
  const useFormspree =
    !process.env.AIRTABLE_API_KEY || errors.includes('airtable');

  if (useFormspree && process.env.NEXT_PUBLIC_FORMSPREE_ID) {
    try {
      await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {
      // silent — we already have other records or will notify via email
    }
  }

  return res.status(200).json({ ok: true });
}
