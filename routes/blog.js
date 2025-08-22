const express = require('express');
const router= express.Router();
const {createComment} = require('../controllers/commentController')

router.post('/create/comment',createComment);


module.exports = router;