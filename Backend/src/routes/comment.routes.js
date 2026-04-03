import express from "express";

const router = express.Router();

router.post("/:postId",protect, addComment);
router.get("/:postId", getComments);
router.delete("/:commentId",protect, deleteComment);

export default router;