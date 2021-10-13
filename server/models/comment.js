const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: {
    type: String,
    required: [true, "The comment needs text"],
  },
  cardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Card",
    required: [true, "The comment needs a card id"]
  },
}, { timestamps: true });

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment