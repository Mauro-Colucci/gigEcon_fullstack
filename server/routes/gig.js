import { Router } from "express";
import verifyToken from "../middleware/verifyToken.js";
import { createGig, deleteGig, getGig, getGigs } from "../controllers/gig.js";

const router = Router();

router.get("/:id", getGig);
router.get("/", getGigs);

router.use(verifyToken);

router.post("/", createGig);
router.delete("/:id", deleteGig);

export default router;
