const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  userNama: {
    type: String,
    unique: true,
    required: [true, 'Voucher must belong to a user!'],
  },
  Hashing: {
    type: String,
    required: [true, 'Voucher must have a to hash!'],
  },
  gameId: {
    type: Number,
    unique: true,
    required: [true, 'Game must have a uniqe Id'],
  },
  gameName: {
    type: String,
    required: [true, 'Game must have a name'],
  },
  gameNameAr: {
    type: String,
    required: [true, 'Game must have a name'],
  },
  gameIcon: {
    type: String,
    required: [true, 'Game must have Game icon'],
  },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
