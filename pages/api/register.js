import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const {
    stageName, realName, email, phone, dob, country,
    experience, platforms, equipment, hearAbout, message,
  } = req.body;

  if (!stageName || !realName || !email || !dob || !country || !experience) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

  if (SMTP_HOST && SMTP_USER && SMTP_PASS && CONTACT_EMAIL) {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"CamModelsDaily" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New Model Application — ${stageName}`,
      html: `
        <h2>New Model Application</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><b>Stage Name</b></td><td>${stageName}</td></tr>
          <tr><td><b>Real Name</b></td><td>${realName}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone || '—'}</td></tr>
          <tr><td><b>Date of Birth</b></td><td>${dob}</td></tr>
          <tr><td><b>Country</b></td><td>${country}</td></tr>
          <tr><td><b>Experience</b></td><td>${experience}</td></tr>
          <tr><td><b>Platforms</b></td><td>${platforms?.join(', ') || '—'}</td></tr>
          <tr><td><b>Equipment</b></td><td>${equipment?.join(', ') || '—'}</td></tr>
          <tr><td><b>Heard via</b></td><td>${hearAbout || '—'}</td></tr>
          <tr><td><b>Message</b></td><td>${message || '—'}</td></tr>
        </table>
      `,
    });
  } else {
    // SMTP not configured — log to console (set up env vars to enable email)
    console.log('New model application:', { stageName, realName, email, country, experience });
  }

  return res.status(200).json({ ok: true });
}
