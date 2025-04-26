import express from "express";
import authRoutes from "../src/routes/auth.routh.js";
import messageRoutes from "../src/routes/message.routh.js";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

import { io, server, app } from "./lib/socket.js";
app.use(express.json({ limit: "50mb" }));

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
  connectDB();
});
