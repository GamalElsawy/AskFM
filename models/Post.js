const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Please write something'],
    minlength: 1,
    maxlength: 1000,
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

module.exports = mongoose.model('Post', postSchema);
