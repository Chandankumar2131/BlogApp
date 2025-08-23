const Post = require('../model/postModel');

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;

        const post = new Post({
            title, body
        });

        const savedPost = await post.save();
        res.json({
            post: savedPost,
        })

    } catch (error) {
        console.log(error);

    }

}

exports.getAllPost= async(req,res)=>{
    try {
        const post = await Post.find().populate("comments").populate("likes").exec();
        res.json({
            post
        });
    } catch (error) {
        console.log(error);
        
    }
}