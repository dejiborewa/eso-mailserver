import express from "express";
import dotenv from "dotenv";
import mail from "./routes/index.js";
import cors from "cors";

dotenv.config();

const corsOptions = {
   origin: ["https://eso-frontend.vercel.app/", "http://localhost:6000"],
   methods: "POST",
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", mail);

const PORT = process.env.PORT || 6000;

app.listen(
   PORT,
   console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`,
   ),
);
