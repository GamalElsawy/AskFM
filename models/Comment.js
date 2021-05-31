const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  content: {
    type: String,
    required: ['true', 'Please write something'],
    minlength: 1,
    maxlength: 500,
  },
  /*authorID: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  }*/
  /*receiverID: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  }*/
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Comment', commentSchema);
