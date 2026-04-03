import express from "express";
import { protect } from "../middleware/auth.middleware.js"
import { followUser, getFollowers, getFollowing, unfollowUser } from "../controllers/follow.controller.js"
const router = express.Router();

router.post("/:userId", protect, followUser);
router.delete("/:userId", protect, unfollowUser);
router.get("/followers/:userId", getFollowers);
router.get("/following/:userId", getFollowing);

export default router;