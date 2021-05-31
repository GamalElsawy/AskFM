const express = require('express');

const router = express.Router();
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/post');

router.route('/').get(getPosts).post(createPost);

router.route('/:postId').get(getPost).put(updatePost).delete(deletePost);

module.exports = router;
