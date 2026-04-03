import express from "express";

const router = express.Router();

router.post("/:postId",protect, likePost);
router.delete("/:postId",protect, unlikePost);

export default router;