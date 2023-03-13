import { Router } from "express";
import { fn } from "../controllers/order.js";

const router = Router();

router.get("/test", fn);

export default router;
