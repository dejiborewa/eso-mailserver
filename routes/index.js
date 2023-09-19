import express from "express";
import sendMail from "../services/index.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { nameOfOrganization, email, countriesOfOrganization, countryOfHeadquarter, address, contactNumber, contactPerson, organizationType } = req.body;
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
                        <p> Name: ${nameOfOrganization || "Not specified"} </p>
                        <p> Email: ${email || "Not specified"} </p>
                        <p> Address: ${address || "Not specified"} </p>
                        <p> Contact Number: ${contactNumber || "Not specified"} </p>
                        <p> Contact Person: ${contactPerson || "Not specified"} </p>
                        <p> Country of Organization: ${countriesOfOrganization || "Not specified"} </p>
                        <p> Headquaters: ${countryOfHeadquarter || "Not specified"} </p>
                        <p> Type of Organization: ${organizationType || "Not specified"} </p>
                        </body>
                        </html>
                    `

        const response = await sendMail("techteam@impactinvestorsfoundation.org", html)

        if (response) {
            return res.status(200).json({ status: true, message: "message sent" })
        } else {
            console.log("Email not sent:", response);
            return res.status(500).json({ status: false, message: "Failed to send the message" });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: "An error occurred while sending the message." });
    }
});

export default router;
