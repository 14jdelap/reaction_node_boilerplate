const Card = require("../models/card");
const Comment = require("../models/comment");
const HttpError = require("../models/httpError");
const listsController = require("./listsController");
const { validationResult } = require("express-validator");

function handleCreateComment(req, res, next){
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next()
  } else {
    next(new HttpError("\nEntity isn't processable, please try again\n", 422))
  }
}

function createComment(req, res, next) {
  const payload = {
    cardId: req.body.cardId,
    text: req.body.comment.text,
  };

  Comment.create(payload)
         .then((comment) => {
           req.comment = comment;
           next()
         })
         .catch((err) => {
           console.log(`Error! ${err}\n`);
           next(new HttpError("Creating comment failed, try again", 500));
         })
}

function sendComment(req, res, next) {
  res.json({
    comment: req.comment
  });
}

exports.handleCreateComment = handleCreateComment;
exports.createComment = createComment;
exports.sendComment = sendComment;