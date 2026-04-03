import Follow from "../models/follow.model.js";

/*  Follow */
export const followUser = async (req, res) => {
  try {
    const follow = await Follow.create({
      follower: req.user._id,
      following: req.params.userId
    });

    res.json(follow);
  } catch (error) {
    res.status(400).json({ message: "Already following" });
  }
};

/*  Unfollow */
export const unfollowUser = async (req, res) => {
  await Follow.findOneAndDelete({
    follower: req.user._id,
    following: req.params.userId
  });

  res.json({ message: "Unfollowed" });
};

/*  Followers */
export const getFollowers = async (req, res) => {
  const followers = await Follow.find({
    following: req.params.userId
  }).populate("follower", "username profilePic");

  res.json(followers);
};

/*  Following */
export const getFollowing = async (req, res) => {
  const following = await Follow.find({
    follower: req.params.userId
  }).populate("following", "username profilePic");

  res.json(following);
};