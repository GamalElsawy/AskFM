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
// @route POST URL/comments/postId/posts
// @access Private
exports.createComment = asyncHandler(async (req, res, next) => {
  req.body.post = req.params.postId;
  const comment = await Comment.create(req.body);

  res.status(201).json({ success: true, data: comment });
});

// @desc update comment
// @route PUT URL/comments/:commentId
// @access Private
exports.updateComment = asyncHandler(async (req, res, next) => {
  let comment = await Comment.findById(req.params.commentId);

  if (!comment) {
    res.status(404).json({
      success: false,
      message: `Thers is no comment with ID: ${req.params.commentId}`,
    });
  } else {
    comment = await Comment.findByIdAndUpdate(req.params.commentId, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({ success: true, data: comment });
  }
});

// @desc delete comment
// @route DELETE URL/comments/:commentId
// @access Private
exports.deleteComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.commentId);

  if (!comment) {
    res.status(404).json({ success: false, message: 'Comment not found' });
  } else {
    await comment.remove();
    res
      .status(200)
      .json({ success: true, data: 'Comment deleted successfully' });
  }
});
