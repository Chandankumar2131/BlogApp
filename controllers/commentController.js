const Post = require("../model/postModel");
const Comment = require("../model/commentModel");

exports.createComment = async (req, res) => {
    try {
        // fetch data from req body
        const { post, user, body } = req.body;

        // create a comment object
        const comment = new Comment({
            post, user, body
        });


        // save the neew comment into database
        const saveComment = await comment.save();
        

        // find the post by ID in the POST model  and add new comment in the comments array

        const updatedPost= await Post.findByIdAndUpdate(post,{$push: {comments:saveComment._id}},{new:true})
.populate("comments")
.exec();
res.status(201).json({
            success: true,
            message: "Comment created successfully",
            post: updatedPost
        });
    } catch (error) {
        console.log(error);

    }
}