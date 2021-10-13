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
  labels: {
    type: [ String ],
    default: [],
  },
  description: {
    type: String,
    default: null,
  },
  listId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
    required: [true, "The list id is required"],
  },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
    required: [true, "The board id is required"],
  },
  position: {
    type: Number,
    default: 65000,
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  commentsCount: {
    type: Number,
    default: 0,
  },
  actions: {
    type: [ Object ],
    default: [],
  },
  archived: {
    type: Boolean,
    default: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;