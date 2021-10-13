const Board = require("../models/board");
const List = require("../models/list");
const Card = require("../models/card");
const HttpError = require("../models/httpError");
const listsController = require("./listsController");
const { validationResult } = require("express-validator");


const getCard = (req, res, next) => {
  const cardId = req.params.id || req.body.cardId;
  Card.findById(cardId).populate({path: "comments"}).then(card => {
    req.card = card;
    next()
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

const addCommentToCard = (req, res, next) => {
  const cardId = req.comment.cardId;
  const commentId = req.comment._id;

  Card.updateOne({ _id: cardId }, { $addToSet: { comments: commentId } })
      .then(() => {
        next()
      })
      .catch((error) => next(new HttpError("You didnt add the comment id to the card")));
}

const sendCard = (req, res, next) => {
  res.json({
    card: req.card,
  });
};

const handleCreateCard = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next()
  } else {
    next(new HttpError("\nEntity isn't processable, please try again\n", 422));
  }
}

const handleUpdateCard = (req, res, next) => {
  const errors = validationResult(req.body);

  if (errors.isEmpty()) {
    const payload = { ...req.body.card };
    req.card = payload
    next()
  } else {
    return next(new HttpError("You need to pass at least one input field", 404));
  }
}

const updateCard = (req, res, next) => {
  const cardId = req.params.id;

  Card.updateOne({ _id: cardId}, req.card)
      .then(() => {
        Card.find({ _id: cardId })
            .then((card) => res.send(card));
      }).catch(error => res.send(error));
}

exports.getCard = getCard;
exports.createCard = createCard;
exports.sendCard = sendCard;
exports.handleCreateCard = handleCreateCard;
exports.addCommentToCard = addCommentToCard;
exports.handleUpdateCard = handleUpdateCard;
exports.updateCard = updateCard