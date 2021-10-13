const express = require ('express');
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const cardsController = require("../controllers/cardsController");
const commentsController = require("../controllers/commentsController");
const { validateBoard, validateList, validateListUpdate, validateCard, validateComment, validateCardUpdate } = require("../validators/validators");


router.get('/boards', boardsController.getBoards );
router.get('/boards/:id', boardsController.getBoard );
router.get('/cards/:id', cardsController.getCard, cardsController.sendCard);
// Get comment missing
// router.get('/comments/:id', commentsController.getComment, commentsController.sendComment);

router.post('/boards', validateBoard, boardsController.createBoard);
router.post('/lists', validateList, listsController.createList, boardsController.addListToBoard, listsController.sendList);
router.post('/cards', validateCard, cardsController.handleCreateCard, listsController.getList, cardsController.createCard, listsController.addCardToList, cardsController.sendCard);
router.post('/comments', validateComment, commentsController.handleCreateComment, cardsController.getCard, commentsController.createComment, cardsController.addCommentToCard, commentsController.sendComment);

router.put('/lists/:id', validateListUpdate, listsController.updateList );
router.put('/cards/:id', validateCardUpdate, cardsController.handleUpdateCard, cardsController.updateCard)

module.exports = router;