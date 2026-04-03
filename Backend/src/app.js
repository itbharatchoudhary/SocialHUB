import express from "express";

import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";
import followRoutes from "./routes/follow.routes.js";
import likeRoutes from "./routes/like.routes.js";
import commentRoutes from "./routes/comment.routes.js";

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({ status: "ok" });
})

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/follow", followRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/comments", commentRoutes);

app.get("/",(req,res)=>{
    res.status(200).json({ status: "ok" });
})

export default app;