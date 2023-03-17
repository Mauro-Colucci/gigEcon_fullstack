import { Router } from "express";
import verifyToken from "../middleware/verifyToken.js";

import {
  getConversations,
  createConversation,
  getSingleConversation,
  updateConversation,
} from "../controllers/conversation.js";

const router = Router();

router.use(verifyToken);

router.get("/", getConversations);
router.post("/", createConversation);
router.get("/:id", getSingleConversation);
router.patch("/:id", updateConversation);

export default router;
