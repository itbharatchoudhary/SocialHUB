import express from "express";
import { protect } from "../middleware/auth.middleware.js"
import { addComment, getComments, deleteComment } from "../controllers/comment.controller.js"
const router = express.Router();

router.post("/:postId", protect, addComment);
router.get("/:postId", getComments);
router.delete("/:commentId", protect, deleteComment);

export default router;