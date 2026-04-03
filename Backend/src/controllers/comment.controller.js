import Comment from "../models/comment.model.js";

/*  Add Comment */
export const addComment = async (req, res) => {
  const comment = await Comment.create({
    user: req.user._id,
    post: req.params.postId,
    text: req.body.text
  });

  res.json(comment);
};

/*  Get Comments */
export const getComments = async (req, res) => {
  const comments = await Comment.find({
    post: req.params.postId
  }).populate("user", "username profilePic");

  res.json(comments);
};

/*  Delete */
export const deleteComment = async (req, res) => {
  const comment = await Comment.findById(req.params.commentId);

  if (comment.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await comment.deleteOne();

  res.json({ message: "Deleted" });
};