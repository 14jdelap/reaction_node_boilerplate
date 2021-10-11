// Check how validationResult works -> not importing exact validators
const { validationResult } = require("express-validator");
const HttpError = require("../models/httpError");
const List = require("../models/list");
const boardControllers = require("./boardsController");

const getList = (req, res, next) => {
  return List.find({ _id: req.body.listId})
             .then((listArray) => {
               req.list = listArray[0]
               next()
             })
             .catch((error) => next(new HttpError("The list doesn't exist, please try again with a valid list id", 404)));
}

const addCardToList = (req, res, next) => {
  const listId = req.card.listId
  const cardId = req.card._id
  List.updateOne({ _id: listId}, { $addToSet: { cards: cardId } })
      .then(() => next())
      .catch((error) => next(new HttpError("You weren't able to add the cardId to the array in the list", 404)))
}

const sendList = (req, res, next) => {
  res.send(req.list);
}

const createList = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {

    const payload = {
      title: req.body.list.title,
      boardId: req.body.boardId,
    }

    List.create(payload)
      .then((list) => {
        List.find({ _id: list._id }, "title _id createdAt updatedAt position").then(
          (arrayOflists) => {
            req.list = arrayOflists[0];
            req.listId = arrayOflists[0]._id;
            next();
          }
        );
      })
      .catch((err) =>
        next(new HttpError("Creating a list failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty", 404));
  }
}

const updateList = (req, res, next) => {
  // Validator is incorrect
  const listId = req.params.id;
  const errors = validationResult(req.body);

  if (errors.isEmpty()) {
    const payload = {};

    if (req.body.title !== undefined) {
      payload.title = req.body.title;
    }

    if (req.body.position !== undefined) {
      payload.position = req.body.position;
    }

    List.updateOne({ _id: listId}, payload).then((list) => {
      List.find({ _id: listId }, "title _id createdAt updatedAt position")
      .then((list) => res.send(list));
    }).catch(error => res.send(error));
  } else {
    return next(new HttpError("You need to pass at least one input field", 404));
  }
}

exports.getList = getList;
exports.createList = createList;
exports.updateList = updateList;
exports.addCardToList = addCardToList;
exports.sendList = sendList;