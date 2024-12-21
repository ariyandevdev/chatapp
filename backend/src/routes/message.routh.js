import express from "express";

import { protectRoute } from "../middlewear/auth.middlewear.js";
import {
  getMessages,
  getUsersSiderbar,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();
router.get("/users", protectRoute, getUsersSiderbar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

export default router;
