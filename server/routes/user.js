import { Router } from "express";
import { getUser, deleteUser } from "../controllers/user.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.get("/:id", getUser);
router.delete("/:id", verifyToken, deleteUser);

export default router;
