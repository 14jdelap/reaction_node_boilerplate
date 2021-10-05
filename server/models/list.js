const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: {
    type: String,
    required: [true, "The list title is required"],
  },
  boardId: {
    type: ObjectId,
    ref: "Board",
    required: [true, "The board id is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  position: {
    type: Number,
    required: [true, "A list position is required"],
  },
  cards: {
    type: Array,
    default: [],
    required: [true, "The list's card array is required"],
  }
});

const List = mongoose.model('List', ListSchema);

module.exports = List;