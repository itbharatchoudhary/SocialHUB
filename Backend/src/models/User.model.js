import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ""
    },
    profilePic: {
        type: String,
        default: ""
    },
    website: {
        type: String,
        default: ""
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isPrivate: {
        type: Boolean,
        default: false
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    savedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    likedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    lastSeen: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;