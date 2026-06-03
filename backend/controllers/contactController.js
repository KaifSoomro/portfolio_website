import { transporter } from "../config/email.js";

export const sendEmail = async (req, res) => {
  try {
    const { email, subject, message } = req.body;
    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: "Both fields are required.",
      });
    }

    await transporter.sendMail({
      from: email, // others email
      to: process.env.USER_EMAIL, // my email
      subject: subject,
      html: `<p> ${message} </p>`,
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
