import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return false;
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${token}`,
  });
  const data = await res.json();
  return data.success === true && data.score >= 0.5;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, phone, message, recaptchaToken } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 });
    }

    if (recaptchaToken) {
      const ok = await verifyRecaptcha(recaptchaToken);
      if (!ok) return NextResponse.json({ error: 'reCAPTCHA verification failed.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    const toAddresses = (process.env.CONTACT_TO_EMAIL || 'contact@inops.tech').split(',').map((e) => e.trim());

    await transporter.sendMail({
      from: `"IDDION Website" <${process.env.GMAIL_USER}>`,
      to: toAddresses,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#141A3A">
          <h2 style="margin:0 0 24px;font-size:20px">New contact form submission</h2>
          <table style="width:100%;border-collapse:collapse;font-size:15px">
            <tr><td style="padding:8px 0;color:#6B7286;width:120px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6B7286">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
            ${company ? `<tr><td style="padding:8px 0;color:#6B7286">Company</td><td style="padding:8px 0">${company}</td></tr>` : ''}
            ${phone ? `<tr><td style="padding:8px 0;color:#6B7286">Phone</td><td style="padding:8px 0">${phone}</td></tr>` : ''}
          </table>
          <div style="margin-top:24px;padding:20px;background:#F5F6FA;border-radius:10px;font-size:15px;line-height:1.6;white-space:pre-wrap">${message}</div>
          <p style="margin-top:32px;font-size:12px;color:#9BA3B8">Sent from iddion.com contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
