var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
}, {timestamps: true});

// Requires population of author
CommentSchema.methods.toJSONFor = function(user){
  return {
    _id: this._id,
    body: this.body,
    createdAt: this.createdAt,
    author: this.author,
    article: this.article,
  };
};

module.exports = mongoose.model('Comment', CommentSchema);
