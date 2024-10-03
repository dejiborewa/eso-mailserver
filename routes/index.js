import express from "express";
import sendMail from "../services/index.js";
import { decryptData } from "../utils/decrypt.js";

const router = express.Router();

router.post("/", async (req, res) => {
   try {
      const { otp } = req.body;
      const decryptedOTP = decryptData(otp);
      const html = `
                        <head>
                           <style>
                           </style>
                        </head>
                           <body>
                              <p>Here is your one-time password, it will expire after 5 minutes</p>
                              <bold>${decryptedOTP}</bold>
                           </body>
                        </html>
                    `;

      const response = await sendMail(from, to, html);

      if (response) {
         return res.status(200).json({ status: true, message: "message sent" });
      } else {
         console.log("Email not sent:", response);
         return res
            .status(400)
            .json({
               status: false,
               message: "Bad Request! Failed to send the message",
            });
      }
   } catch (error) {
      console.log(error);
      res.status(500).json({
         status: false,
         message: "An error occurred while sending the message.",
      });
   }
});

export default router;
