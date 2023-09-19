import nodemailer from 'nodemailer'

async function sendMail(from, html) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "techteam@impactinvestorsfoundation.org",
      pass: process.env.EMAIL_PASS
    },
  });


  let mailOptions = {
    from: from,
    to: "ayodejiakinborewa@gmail.com",
    subject: "NABII Membership Notification",
    html: html
  };

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log("Message sent: %s", info.messageId);
    return info
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export default sendMail
