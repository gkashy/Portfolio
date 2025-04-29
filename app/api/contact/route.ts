import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  try {
    // Parse request body
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Confirmation email to the person who submitted the form
    const confirmationEmail = {
      to: email,
      from: 'gaurav404.gk@gmail.com', // Your verified SendGrid sender
      subject: 'Thank you for contacting Gaurav Kashyap',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color:rgb(77, 107, 255);">Thank You for Reaching Out!</h2>
          <p>Hello ${name},</p>
          <p>Thank you for contacting me. I've received your message and will get back to you as soon as possible.</p>
          <p>In the meantime, feel free to check out more of my work on my <a href="https://www.linkedin.com/in/gaurav-kashyap-909504172/" style="color:rgb(77, 107, 255);">LinkedIn</a>.</p>
          <p>Best regards,<br>Gaurav Kashyap</p>
        </div>
      `,
    };

    // Notification email to yourself
    const notificationEmail = {
      to: 'gaurav404.gk@gmail.com',
      from: 'gaurav404.gk@gmail.com', // Your verified SendGrid sender
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4DA8FF;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      sgMail.send(confirmationEmail),
      sgMail.send(notificationEmail)
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 