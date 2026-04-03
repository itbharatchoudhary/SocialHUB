import express from "express";

const router = express.Router();

// Auth
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// Profile
router.get("/:id", getUserProfile);
router.put("/update",protect, updateUserProfile);

export default router;