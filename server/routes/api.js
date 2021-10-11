const express = require ('express');
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const cardsController = require("../controllers/cardsController")
const { validateBoard, validateList, validateListUpdate, validateCard } = require("../validators/validators");


router.get('/boards', boardsController.getBoards );
router.get('/boards/:id', boardsController.getBoard );
router.get('/cards/:id', cardsController.getCard);

router.post('/boards', validateBoard, boardsController.createBoard );
router.post('/lists', validateList, listsController.createList, boardsController.addListToBoard, listsController.sendList);
//router.post('/cards', validateCard, cardsController.handleCreateCard);

router.post('/cards', validateCard, cardsController.handleCreateCard, listsController.getList, cardsController.createCard, listsController.addCardToList, cardsController.sendCard );


router.put('/lists/:id', validateListUpdate, listsController.updateList );

module.exports = router;