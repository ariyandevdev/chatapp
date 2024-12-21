import express from "express";
import authRoutes from "../src/routes/auth.routh.js";
import messageRoutes from "../src/routes/message.routh.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
  connectDB();
});
