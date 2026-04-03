import Like from "../models/like.model.js";

/*  Like */
export const likePost = async (req, res) => {
  try {
    const like = await Like.create({
      user: req.user._id,
      post: req.params.postId
    });

    res.json(like);
  } catch {
    res.status(400).json({ message: "Already liked" });
  }
};

/*  Unlike */
export const unlikePost = async (req, res) => {
  await Like.findOneAndDelete({
    user: req.user._id,
    post: req.params.postId
  });

  res.json({ message: "Unliked" });
};