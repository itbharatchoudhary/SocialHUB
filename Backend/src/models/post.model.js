import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  caption: {
    type: String,
    default: ""
  },

  media: [
    {
      type: String, // image/video URL
      required: true
    }
  ],

  location: {
    type: String,
    default: ""
  }

}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;