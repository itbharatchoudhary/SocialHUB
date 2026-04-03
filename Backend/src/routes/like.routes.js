import express from "express";
import { protect } from "../middleware/auth.middleware.js"
import { likePost, unlikePost } from "../controllers/like.controller.js"
const router = express.Router();

router.post("/:postId", protect, likePost);
router.delete("/:postId", protect, unlikePost);

export default router;