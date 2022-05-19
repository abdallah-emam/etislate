const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Voucher must belong to a user!'],
  },
  user: {
    type: String,
    required: [true, 'Voucher must related to a game!'],
  },
  VoucherId: {
    type: Number,
    unique: true,
  },
  VoucherName: {
    type: String,
    required: [true, 'Voucher must hava a name!'],
  },
  VoucherNameAr: {
    type: String,
    required: [true, 'Voucher must hava a name!'],
  },
  VoucharDesc: {
    type: String,
    required: [true, 'Voucher must hava a Description!'],
  },
  VoucharDescAr: {
    type: String,
    required: [true, 'Voucher must hava an Arabic Description!'],
  },
  VoucherImage: {
    type: String,
    required: [true, 'Voucher must hava a Image!'],
  },
  PriceList: {
    type: {
      methodId: Number,
      price: String,
      discount: Boolean,
      DicountPrice: String,
    },
    // required: [true, 'Voucher must hava a name!'],
  },
  Available: {
    type: Boolean,
    default: true,
  },
  Currency: {
    type: String,
    default: 'EGP',
  },
});

const Voucher = mongoose.model('Voucher', voucherSchema);

module.exports = Voucher;
