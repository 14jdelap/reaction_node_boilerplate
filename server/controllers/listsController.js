// Check how validationResult works -> not importing exact validators
const { validationResult } = require("express-validator");
const HttpError = require("../models/httpError");
const List = require("../models/list");
const boardControllers = require("./boardsController");

const createList = (req, res, next) => {
  console.log(req)
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const boardId = req.body.boardId;

    const payload = {
      title: req.body.list.title,
      boardId,
    }

    List.create(payload)
      .then((list) => {
        List.find({ _id: list._id }, "title _id createdAt updatedAt position").then(
          (list) => {
            boardControllers.addListToBoard(boardId, list[0]._id);
            res.json({ list })
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

exports.createList = createList;
exports.updateList = updateList;