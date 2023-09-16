import express from "express";
import sendMail from "../services/sendMail.js";


const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { nameOfOrganization, email } = req.body;
        const html = `
                        <head>
                        <style>
                            .con{
                            background-color: #198754;
                            color: white;
                            padding: 12px 20px;
                            text-align: center;
                            font-weight: 600;
                            font-weight: bold;
                            letter-spacing: 1px;
                            }

                        </style>
                        </head>
                        <body>
                        <h3 class="con">New Registration</h3>
                        <p> Name : ${nameOfOrganization} </p>
                        <p> Email : ${email} </p>
                  

                        </body>
                        </html>
                    `

        const res = await sendMail("techteam@impactinvestorsfoundation.org", html)
        console.log(res)
        res.json({ status: true, message: "message sent" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: "An error occurred while sending the message." });
    }
});

export default router;
