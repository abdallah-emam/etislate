const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

router.route('/').post(gameController.addGame);
router.post('/retriveGame', gameController.game);

module.exports = router;
