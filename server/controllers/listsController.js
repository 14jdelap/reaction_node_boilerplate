const { validationResult } = require("express-validator");
const HttpError = require("../models/httpError");
const List = require("../models/list");
const boardControllers = require("./boardsController");

const createList = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const boardId = req.body.boardId;

    const payload = {
      title: req.body.list.title,
      boardId,
    }

    List.create(payload)
      .then((list) => {
        List.find({ _id: list._id }, "title _id createdAt updatedAt").then(
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
  const listId = req.params.id;
}

exports.createList = createList;
exports.updateList = updateList;