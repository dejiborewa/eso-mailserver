import nodemailer from "nodemailer";

async function sendMail(to, html) {
   let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
         user: process.env.EMAIL_ACCOUNT,
         pass: process.env.EMAIL_PASSWORD,
      },
   });

   let mailOptions = {
      from: process.env.EMAIL_ACCOUNT,
      to: to,
      subject: "Welcome to ESO Collaborative",
      html: html,
   };

   try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", info.messageId);
      return info;
   } catch (error) {
      console.log(error);
   }
}

export default sendMail;
