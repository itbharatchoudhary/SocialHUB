import Post from "../models/post.model.js";

/*  Create Post */
export const createPost = async (req, res) => {
    try {
        const { caption, media } = req.body;

        const post = await Post.create({
            user: req.user._id,
            caption,
            media
        });

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/*  Feed */
export const getFeedPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate("user", "username profilePic")
            .sort({ createdAt: -1 });

        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/*  Single Post */
export const getSinglePost = async (req, res) => {
    const post = await Post.findById(req.params.id)
        .populate("user", "username profilePic");

    res.json(post);
};

/*  Delete */
export const deletePost = async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.user.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: "Not authorized" });
    }

    await post.deleteOne();

    res.json({ message: "Post deleted" });
};
