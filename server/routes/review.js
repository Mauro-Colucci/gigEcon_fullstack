import { Router } from "express";
import { fn } from "../controllers/review.js";

const router = Router();

router.get("/test", fn);

export default router;
