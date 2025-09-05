import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // ✅ Send email to your company inbox
    const companyEmail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "hello@novaddi.com", // your custom company email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // ✅ Optional: Auto-reply to customer
    const customerReply = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "We’ve received your message ✅",
      text: `Hi ${name},\n\nThanks for reaching out! We’ve received your message and will get back to you shortly.\n\nBest,\nYour Company Team`,
    });

    return NextResponse.json({ success: true, companyEmail, customerReply });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
