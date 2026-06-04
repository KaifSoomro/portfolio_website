import { transporter } from "../config/email.js";

export const sendEmail = async (req, res) => {
  try {
    const { email, subject, message } = req.body;
    if (!email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    await transporter.sendMail({
      from: `Contact Form ${process.env.USER_EMAIL}`, 
      to: process.env.USER_EMAIL,
      subject: subject,
      html: `<h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${subject}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      `,
      replyTo: email,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfull.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error in sendEmail",
      error: error.message,
    });
  }
};
