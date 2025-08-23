const Post = require("../model/postModel");
const Like = require('../model/likeModel');

exports.createLike = async (req, res) => {
    try {
        const { post, user } = req.body;
        const like = new Like({
            post, user
        });

        const saveLike = await like.save();
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: saveLike._id } }, { new: true })
            .populate("likes")
            .exec();
        res.status(201).json({
            success: true,
            message: "Like created successfully",
            post: updatedPost
        });
    } catch (error) {
        console.log(error);
    }
}



exports.removeLike = async (req, res) => {
    try {
        const { postId, likeId } = req.body; // get post and like IDs

        // 1. Delete the Like document
        const like = await Like.findByIdAndDelete(likeId);
        if (!like) {
            return res.status(404).json({ success: false, message: "Like not found" });
        }

        // 2. Remove the like reference from the Post's likes array
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { $pull: { likes: likeId } }, // remove the like ID from array
            { new: true }
        ).populate("likes")
            .exec();
        res.status(200).json({
            success: true,
            message: "Like removed successfully",
            post: updatedPost
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message });
    }
};
