const express = require('express');
const router= express.Router();
const {createComment} = require('../controllers/commentController')
const{createLike,removeLike}= require('../controllers/likeController');
const{createPost,getAllPost}= require('../controllers/postController');

router.post('/create/comment',createComment);
router.post('/create/like',createLike);
router.post('/create/post',createPost);
router.get('/get/posts',getAllPost);
router.post('/remove/like',removeLike);


module.exports = router;