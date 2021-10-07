const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: {
    type: String,
    required: [true, "The list title is required"],
  },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
    required: [true, "The board id is required"],
  },
  position: {
    type: Number,
    /*required: [true, "A list position is required"],*/
  },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card", }] // ref = model
}, { timestamps: true });

const List = mongoose.model('List', ListSchema);

module.exports = List;