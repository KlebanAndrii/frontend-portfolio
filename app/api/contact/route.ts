import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Processing Post-request from contact form
export async function POST(req: NextRequest) {
  try {
    // Obtaining and Parsing the body of the request in JSON format
    const formData = await req.json();
    const { name, email, message } = formData;

    // Verification: All fields must be filled
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields must be filled" },
        { status: 400 }
      );
    }
    // Setting a conveyor to send an email via SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // Use SSL/TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Setting the letter itself
    const mailOptions = {
      from: process.env.EMAIL_FROM, // Email Sender
      to: process.env.EMAIL_TO || "klebanandrii83@gmail.com", // Email of the recipient
      subject: `New message from ${name}`, // Тема листа
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Text content (Plain Text)
      html: `
        <h3>New message from your site</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `, //HTML-content of the letter
    };

    // Sending the letter
    await transporter.sendMail(mailOptions);

    // Successful answer
    return NextResponse.json(
      { message: "The message has been successfully sent" },
      { status: 200 }
    );
  } catch (error) {
    // Error Processing: Logging on the server and reply to the customer
    console.error("Error when sending a message:", error);
    return NextResponse.json(
      { error: "An error occurred when sending a message" },
      { status: 500 }
    );
  }
}
