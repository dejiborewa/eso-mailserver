import express from "express";
import dotenv from "dotenv";
import mail from "./routes/index.js";
import cors from "cors";

dotenv.config();

const corsOptions = {
   origin: "*", // Replace with specific origin if needed
   methods: ["GET", "POST", "PUT", "DELETE"], // Add other methods as needed
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
