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

  // setup email data with unicode symbols
  let mailOptions = {
    from: from,
    // to: "iogunfuwa@impactinvestorsfoundation.org, mglover@impactinvestorsfoundation.org",
    to: "ayodejiakinborewa.com",
    subject: "NABII Membership Notification",
    html: html
  };

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail(mailOptions)
    console.log("Message sent: %s", info.messageId);
    return info
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export default sendMail 