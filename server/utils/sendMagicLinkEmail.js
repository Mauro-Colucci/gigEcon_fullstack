import nodemailer from "nodemailer";
/* import { config } from "dotenv";
config({ path: "../config/.env" }); */

const sendMagicLinkEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD,
    },
  });

  const options = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Finish Logging In",
    html: `<a href="http://localhost:3000/verify?token=${token}"> Log In</a>`,
  };

  try {
    const info = await transporter.sendMail(options);
    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.log(err);
  }
};

export default sendMagicLinkEmail;
