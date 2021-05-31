const express = require('express');
const router = express.Router();

const { getComments, getComment } = require('../controllers/comment');
const { route } = require('./posts');

router.route('/').get(getComments);
router.route('/:commentId').get(getComment);

module.exports = router;
