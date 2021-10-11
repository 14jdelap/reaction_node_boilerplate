const Board = require("../models/board");
const List = require("../models/list");
const Card = require("../models/card");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getBoards = (req, res, next) => {
  Board.find({}, "title _id createdAt updatedAt").then((boards) => {
    res.json({
      boards,
    });
  });
};

const getBoard = (req, res, next) => {
  // PENDING: confirm that this populates the board with lists
  // https://mongoosejs.com/docs/4.x/docs/populate.html

  const boardId = req.params.id;
  Board.findById(boardId).populate({path: "lists", populate: {path: "cards"}}).then((board) => {
    res.json(board);
  }).catch((error) => {
    console.log(error)
    next(new HttpError("The board doesn't exist, please try looking for a valid board", 404))
  });
};

const createBoard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Board.create(req.body.board)
      .then((board) => {
        Board.find({ _id: board._id }, "title _id createdAt updatedAt").then(
          (board) => res.json({ board })
        );
      })
      .catch((err) =>
        next(new HttpError("Creating board failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const addListToBoard = (boardId, listId) => {
  Board.updateOne({ _id: boardId}, { $addToSet: { lists: listId } })
       .catch((err) => console.log(err));
}

exports.getBoards = getBoards;
exports.getBoard = getBoard;
exports.createBoard = createBoard;
exports.addListToBoard = addListToBoard;
