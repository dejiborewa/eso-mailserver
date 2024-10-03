import nodemailer from "nodemailer";

async function sendMail(from, to, html) {
   let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
         user: "techteam@impactinvestorsfoundation.org",
         pass: process.env.EMAIL_PASSWORD,
      },
   });

   let mailOptions = {
      from: from,
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
      throw new Error(error);
   }
}

export default sendMail;
