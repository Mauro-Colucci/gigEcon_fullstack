import { Router } from "express";
import verifyToken from "../middleware/verifyToken.js";
import {
  createReview,
  deleteReview,
  getReviews,
} from "../controllers/review.js";

const router = Router();

router.post("/", verifyToken, createReview);
router.delete("/:id", verifyToken, deleteReview);
router.get("/:id", getReviews);

export default router;
