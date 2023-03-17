import { Router } from "express";
import { createMessage, getMessages } from "../controllers/message.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.use(verifyToken);

router.post("/", createMessage);
router.get("/:id", getMessages);

export default router;
