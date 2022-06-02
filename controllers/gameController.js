// const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const Game = require('../models/gameModel');

exports.addGame = catchAsync(async (req, res, next) => {
  const newGame = await Game.create(req.body);

  res.status(201).json({
    Success: 'true',
    ErrorCode: 0,
    data: newGame,
  });
});

exports.game = catchAsync(async (req, res, next) => {
  res.status(201).json({
    Success: 'true',
    ErrorCode: 0,
    data: [
      {
        gameId: 1,
        gameName: 'LOL',
        gameNameAr: 'ليج اوف لايجند',
        gameIcon:
          'https://vqesportsplatform.s3.eu-west-3.amazonaws.com/logos/LOL+B.png',
      },
      {
        gameId: 2,
        gameName: 'PUPG',
        gameNameAr: 'ببجي',
        gameIcon:
          'https://vqesportsplatform.s3.eu-west-3.amazonaws.com/logos/pubg+B.png',
      },
    ],
  });
});
