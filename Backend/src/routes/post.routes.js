import express from "express";

const router = express.Router();

router.post("/",protect, createPost);
router.get("/feed", getFeedPosts);
router.get("/:id", getSinglePost);
router.delete("/:id", deletePost);

export default router;