import { transporter } from "../config/email.js";
import Email from "../models/email.model.js";

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

    const newEmail = new Email({
      from: email,
      to: process.env.USER_EMAIL,
      name: subject,
      message: message,
    });

    await newEmail.save();

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

export const getEmail = async (req, res) => {
  try {
    const { emailId } = req.params;
    const email = await Email.findById({ _id: emailId });

    if (!email) {
      return res.status(404).json({
        success: false,
        message: "Email not found",
      });
    }

    return res.status(200).json({
      success: true,
      email
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error in getEmail",
      error: error.message,
    });
  }
};

export const getAllEmails = async (req, res) => {
  try {
    const emails = await Email.find();

    if (!emails) {
      return res.status(404).json({
        success: false,
        message: "Emails not found",
      });
    }

    return res.status(200).json({
      success: true,
      emails
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error in getAllEmails",
      error: error.message,
    });
  }
};
