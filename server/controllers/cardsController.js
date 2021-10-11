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

const createCard = (payload, next) => {
  return Card.create(payload)
      .catch((err) => {
        console.log(err)
        next(new HttpError("Creating card failed, please try again", 500))
      });
};

const handleCreateCard = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    // Error: sending 2 responses for 1 request

    listsController.getList(req.body.listId, next)
                   .then((list) => {
                     // Create card and pass it to the next handler
                     const payload = {
                       ...req.body.card,
                       listId: req.body.listId,
                       boardId: req.body.boardId
                      };

                     payload.boardId = list[0].boardId;
                     return createCard(payload, next);
                   })
                   .then((card) => {
                     // Create card to its list
                     listsController.addCardToList(card.listId, card._id);
                     return card;
                   })
                   .then((card) => res.json(card));
  } else {
    return next(new HttpError("\nInvalid inputs, please try again\n", 422));
  }
}

exports.getCard = getCard;
exports.createCard = createCard;
exports.handleCreateCard = handleCreateCard;