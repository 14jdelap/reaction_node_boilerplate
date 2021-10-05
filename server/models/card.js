const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: {
    type: String,
    required: [true, "The card needs a title"],
  },
  dueDate: {
    type: Date,
    default: null,
  },
  labels: [{ type: String, }],
  description: {
    type: String,
    default: null,
  },
  listId: [{ type: mongoose.Schema.Types.ObjectId, ref: "List" }],
  position: {
    type: Number,
    required: [true, "A card position is required"],
  },
  commentsCount: {
    type: Number,
    default: 0,
    required: [true, "Comments count required"],
  },
});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;