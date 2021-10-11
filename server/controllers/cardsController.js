const Board = require("../models/board");
const List = require("../models/list");
const Card = require("../models/card");
const HttpError = require("../models/httpError");
const listsController = require("./listsController");
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

const createCard = (req, res, next) => {
  const payload = {
    ...req.body.card,
    listId: req.body.listId,
    boardId: req.list.boardId
  };
  
  Card.create(payload)
      .then((card) => {
        req.card = card
        next()
      })
      .catch((err) => {
        console.log("There is an error here", err)
        next(new HttpError("Creating card failed, please try again", 500))
      });
};

const sendCard = (req, res) => {
  const card = req.card;
  res.json({
    card,
  });
};

const handleCreateCard = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next()
  } else {
    next(new HttpError("\nInvalid inputs, please try again\n", 422));
  }
}

exports.getCard = getCard;
exports.createCard = createCard;
exports.sendCard = sendCard;
exports.handleCreateCard = handleCreateCard;