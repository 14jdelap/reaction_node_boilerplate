const Board = require("../models/board");
const List = require("../models/list");
const Card = require("../models/card");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");


const getCard = (req, res, next) => {
  const cardId = req.params.id;
  Card.findById(cardId).then(card => {
    res.json(card)
  })
  .catch((error) => {
    console.log(error)
    next(new HttpError("The card doesn't exist, please try looking for a valid board", 404))
  })
}

/*

const getBoard = (req, res, next) => {
  // PENDING: confirm that this populates the board with lists
  // https://mongoosejs.com/docs/4.x/docs/populate.html

  const boardId = req.params.id;
  // {path: "lists", populate: {path: "cards"}}
  Board.findById(boardId).populate({path: "lists", populate: {path: "cards"}}).then((board) => {
    res.json(board);
  }).catch((error) => {
    console.log(error)
    next(new HttpError("The board doesn't exist, please try looking for a valid board", 404))
  });
};


*/

exports.getCard = getCard;
