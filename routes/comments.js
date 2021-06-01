const express = require('express');
const router = express.Router();

const {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
} = require('../controllers/comment');

router.route('/').get(getComments);
router
  .route('/:commentId')
  .get(getComment)
  .put(updateComment)
  .delete(deleteComment);
router.route('/:postId/posts').post(createComment);

module.exports = router;
