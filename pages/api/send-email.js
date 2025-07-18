import nodemailer from 'nodemailer';
 
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
 
  const { name, email, phone, flattype, purpose, message } = req.body;
 
  const transporter = nodemailer.createTransport({
host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'deepankarkumar1995@gmail.com',        
      pass: 'aabn kjob wdhr einj',   
    },
    tls:{
        rejectUnauthorized:false,
    },
    connectionTimeout:10000 // 10 seconds Delay
  });
 
  try {
    // 1. Email to YOU (admin)
    await transporter.sendMail({
      from: `"South Delhi Flat Wale" <${email}>`,
      to: 'deepankarkumar1995@gmail.com',           // Admin email
      subject: `📨 New Enquiry from ${name}`,
      html: `
        <h2>New Flat Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Flat Type:</strong> ${flattype}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr/>
        <p>Submitted from: <strong>South Delhi Flat Wale</strong></p>
      `,
    });
 
    // 2. Confirmation email to CUSTOMER
    await transporter.sendMail({
      from: '"South Delhi Flat Wale" <deepankarkumar1995@gmail.com>',
      to: email,
      subject: `Thank You for Contacting South Delhi Flat Wale`,
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for your enquiry about a <strong>${flattype}</strong> for <strong>${purpose}</strong>.</p>
        <p>We’ve received your message and will get back to you shortly.</p>
        <hr />
        <p><strong>Your Details:</strong></p>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>Warm regards,<br/><strong>South Delhi Flat Wale</strong></p>
      `,
    });
 
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Email sending failed.' });
  }
}