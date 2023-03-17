import { Router } from "express";
import { createOrder, getOrders } from "../controllers/order.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.use(verifyToken);

router.post("/:gigId", createOrder);
router.get("/", getOrders);

export default router;
