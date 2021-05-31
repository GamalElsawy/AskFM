const Comment = require('../models/Comment');
const asyncHandler = require('../middlewares/asyncHandler');
const ErrorResponse = require('../utilities/errorRes');

// @desc Get all comments
// @route GET URL/comments
// @access Public
exports.getComments = asyncHandler(async (req, res, next) => {
  const comments = await Comment.find();

  res.status(200).json({ success: true, data: comments });
});

// @desc Get single comment
// @route GET URL/comments/:commentId
// @access Private
exports.getComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.commentId);

  if (!comment) {
    res.status(404).json({
      success: false,
      massage: `Thers is no comment with ID: ${req.params.commentId}`,
    });
    //next();
  } else {
    res.status(200).json({ success: true, data: comment });
  }
});

// @desc create new comment
// @route POST URL/comments/postId
// @access Private
/*exports.createComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.create(req.body);

  res.status(201).json({ success: true, data: post });
});

// @desc update post
// @route PUT URL/posts/:postId
// @access Private
exports.updatePost = asyncHandler(async (req, res, next) => {
  let post = await Post.findById(req.params.postId);

  if (!post) {
    res.status(404).json({
      success: false,
      message: `Thers is no post with ID: ${req.params.postId}`,
    });
  } else {
    post = await Post.findByIdAndUpdate(req.params.postId, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({ success: true, data: post });
  }
});

// @desc delete post
// @route DELETE URL/posts/:postId
// @access Private
exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postId);

  if (!post) {
    res.status(404).json({ success: false, message: 'Post not found' });
  } else {
    await post.remove();
    res.status(200).json({ success: true, data: 'Post deleted successfully' });
  }
});
*/
