const Post = require('../models/Post');
const asyncHandler = require('../middlewares/asyncHandler');
const ErrorResponse = require('../utilities/errorRes');

// @desc Get all posts
// @route GET URL/posts
// @access Public
exports.getPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find();

  res.status(200).json({ success: true, data: posts });
});

// @desc Get single post
// @route GET URL/posts/:postId
// @access Private
exports.getPost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postId);

  if (!post) {
    res.status(404).json({
      success: false,
      massage: `Thers is no post with ID: ${req.params.postId}`,
    });
    //next();
  } else {
    res.status(200).json({ success: true, data: post });
  }
});

// @desc create new post
// @route POST URL/posts/
// @access Private
exports.createPost = asyncHandler(async (req, res, next) => {
  const post = await Post.create(req.body);

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
