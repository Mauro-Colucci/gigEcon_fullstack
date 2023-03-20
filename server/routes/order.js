import { Router } from "express";
import { getOrders, intent, confirm } from "../controllers/order.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.use(verifyToken);

router.get("/", getOrders);
router.post("/create-payment-intent/:id", intent);
router.patch("/", confirm);

export default router;
