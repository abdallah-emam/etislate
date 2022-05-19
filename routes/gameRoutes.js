const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Game:
 *       type: object
 *       required:
 *         - Username
 *         - Hashing
 *         - Limit
 *         - Skip
 *       properties:
 *         Username:
 *           type: string
 *           description: Username to be used by Server
 *         Hashing:
 *           type: string - MD5
 *           description: “Username + Secret Key” hashed using MD5
 *         Limit:
 *           type: init
 *           description: Limit for number of retrieved items in the list
 *         Skip:
 *           type: init
 *           description: Skip number of items in the list
 *       example:
 *         userNama: EtisalatMisr
 *         Hashing: afb920cc0cb6684a47ed85ad8b92ef5e
 *         Limit: 10
 *         skip: 10
 */
router.post('/retriveGame', gameController.game);
/**
 * @swagger
 * tags:
 *   name: Game
 *   description: The Game managing API
 */
/**
 * @swagger
 * /api/v1/retriveGame:
 *   post:
 *     summary: Create a new Game
 *     tags: [Game]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Game'
 *     responses:
 *       200:
 *         description: The Game was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Game'
 *       500:
 *         description: Some server error
 */

module.exports = router;
