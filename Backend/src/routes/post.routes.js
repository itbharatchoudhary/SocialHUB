import express from "express";
import { createPost, getFeedPosts, getSinglePost, deletePost } from "../controllers/post.controller.js"
import { protect } from "../middleware/auth.middleware.js"
const router = express.Router();

router.post("/", protect, createPost);
router.get("/feed", getFeedPosts);
router.get("/:id", getSinglePost);
router.delete("/:id", deletePost);

export default router;