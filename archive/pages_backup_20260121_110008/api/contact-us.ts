import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface ContactFormData {
  email: string;
  newsletter: boolean;
  firstName: string;
  lastName: string;
  role: string;
  url: string;
  zipCode: string;
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      email,
      newsletter,
      firstName,
      lastName,
      role,
      url,
      zipCode,
      message,
    }: ContactFormData = req.body;

    // Prepare email content
    const fullName = `${firstName} ${lastName}`;
    const roleDisplay = role.charAt(0).toUpperCase() + role.slice(1);

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Role:</strong> ${roleDisplay}</p>
      <p><strong>Website/Social Media:</strong> ${url}</p>
      <p><strong>Zip Code:</strong> ${zipCode}</p>
      <p><strong>Newsletter Signup:</strong> ${newsletter ? "Yes" : "No"}</p>
      ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ""}
      
      <hr>
      <p><em>This message was sent from the SHiFT website contact form.</em></p>
    `;

    // Send email to admin
    const adminEmail = {
      to: "admin@shift.com",
      from: email,
      subject: `New Contact Form Submission from ${fullName}`,
      html: emailContent,
    };

    // Send confirmation email to user
    const userEmail = {
      to: email,
      from: "noreply@shift.com",
      subject: "Thank you for contacting SHiFT",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${firstName},</p>
        <p>Thank you for your interest in SHiFT. We've received your message and will get back to you as soon as possible.</p>
        <p>Here's a summary of what you submitted:</p>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Role:</strong> ${roleDisplay}</li>
          <li><strong>Website/Social Media:</strong> ${url}</li>
          <li><strong>Zip Code:</strong> ${zipCode}</li>
          <li><strong>Newsletter Signup:</strong> ${
            newsletter ? "Yes" : "No"
          }</li>
          ${message ? `<li><strong>Message:</strong> ${message}</li>` : ""}
        </ul>
        <p>We're excited about the possibility of working together to create a mentally healthy world!</p>
        <p>Best regards,<br>The SHiFT Team</p>
      `,
    };

    await Promise.all([sgMail.send(adminEmail), sgMail.send(userEmail)]);

    return res.status(200).json({
      message: "Contact form submitted successfully",
      success: true,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    // Handle SendGrid specific errors
    if (error instanceof Error && error.message.includes("SendGrid")) {
      return res.status(500).json({
        message:
          "Email service temporarily unavailable. Please try again later.",
        success: false,
      });
    }

    return res.status(500).json({
      message: "Internal server error. Please try again later.",
      success: false,
    });
  }
}
