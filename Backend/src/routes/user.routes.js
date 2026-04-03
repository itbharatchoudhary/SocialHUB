import express from "express";
import { registerUser, loginUser, logoutUser, getUserProfile, updateUserProfile } from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.middleware.js"
const router = express.Router();

// Auth
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// Profile
router.get("/:id", getUserProfile);
router.put("/update", protect, updateUserProfile);

export default router;