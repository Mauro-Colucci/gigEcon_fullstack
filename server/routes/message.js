import { Router } from "express";
import { fn } from "../controllers/message.js";

const router = Router();

router.get("/test", fn);

export default router;
