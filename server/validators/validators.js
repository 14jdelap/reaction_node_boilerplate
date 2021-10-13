const { check, oneOf } = require('express-validator');

exports.validateBoard = [check("board.title").not().isEmpty()];
exports.validateList = [check("list.title").not().isEmpty(), check("boardId").not().isEmpty()];
exports.validateCard = [check("card.title").not().isEmpty(), check("listId").not().isEmpty()];
// Confirm this works
exports.validateListUpdate = oneOf([check("title").not().isEmpty(), check("position").not().isEmpty()]);
exports.validateComment = [check("comment.text").not().isEmpty(), check("cardId").not().isEmpty()];