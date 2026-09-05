import nodemailer from "nodemailer";

export async function sendContactEmail(req, res) {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            text: `
Name: ${name}
Email: ${email}

${message}
      `,
        });

        res.status(200).json({
            message: "Email sent successfully",
        });
    } catch (error) {
        console.error("Email sending failed:", error.message);

        res.status(500).json({
            message: "Failed to send email",
        });
    }
}