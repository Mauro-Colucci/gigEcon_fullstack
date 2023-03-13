import { Router } from "express";
import { fn } from "../controllers/conversation.js";

const router = Router();

router.get("/test", fn);

export default router;
