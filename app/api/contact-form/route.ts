import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
    secure: true
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { name, email, message } = body;
    console.log(body);
    // return NextResponse.json({message:"hi"})
    if (!name || !email || !message) {
        return NextResponse.json(
            { message: "All fields are required!", success: false },
            { status: 200}
        )
    }
    try {
        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error)
                    return NextResponse.json(
                        { message: "Sorry — something went wrong", success: false },
                        { status: 400 }
                    )
                } else {
                    // console.log("connection verified");
                    resolve(success);
                }
            });

        });
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            to: process.env.NOTIFICATION_EMAIL, // You receive the mail
            subject: `New message from Portfolio Contact Form`,
            replyTo: email,

            html: `
        <div style="font-family: Arial, sans-serif; background: #f7f7f7; padding: 20px;">
          <div style="max-width: 500px; margin: auto; background: white; border-radius: 8px; padding: 20px; border: 1px solid #eee;">
            <h2 style="margin-bottom: 10px; color:#4F46E5;">📩 New Portfolio Message</h2>

            <p style="margin-bottom: 10px;">You have received a new message from your portfolio contact form.</p>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>

            <p style="margin: 15px 0 6px;"><strong>Message:</strong></p>
            <div style="background:#fafafa; padding:12px; border-radius:6px; border:1px solid #eee; white-space:pre-wrap;">
              ${message}
            </div>

            <hr style="border:none; border-bottom:1px solid #eee; margin: 20px 0;" />

            <p style="font-size: 12px; color:#666; text-align:center;">
              This email was automatically generated from your portfolio website.
            </p>
          </div>
        </div>
      `
        });
        return NextResponse.json(
            {message: "Thanks — message sent!" , success : true},
            {status : 200}
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Sorry — something went wrong", success: false },
            { status: 400 }
        )
    }
}