import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mailController from "../controller/mailController.js";

dotenv.config();

const corsOptions = {
   origin: [
      "https://eso-mailserver.vercel.app/",
      "https://eso-frontend.vercel.app/",
      "http://localhost:6000",
   ],
   methods: "POST",
};

const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors(corsOptions));
app.use(express.json());

app.post("/api/request-otp", mailController);

app.listen(
   PORT,
   console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`,
   ),
);
