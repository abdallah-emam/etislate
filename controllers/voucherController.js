const catchAsync = require('../utils/catchAsync');
// const Voucher = require('../models/VoucherModel');

exports.voucherDetails = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
    data: {
      VoucherList: [
        {
          VoucherId: '6248eddccff25dc9fe6734e0',
          VoucherName: 'Pubg Mobile 600+ Free 60 UC - $9.99 Recharge Voucher',
          VoucherNameAr: 'بطاقة ببجي $10',
          VoucharDesc: 'Free 60 UC - $9.99 Recharge Voucher',
          VoucharDescAr: 'بطاقة ٦٠ يو سي - 10$',
          VoucherImage:
            'https://vqesportsplatform.s3.eu-west-3.amazonaws.com/products/PubG60060.png',
          PriceList: {
            MethodId: '2',
            Price: '190',
            Discount: '10%',
            DicountPrice: '171',
          },
          Available: 'true',
          Currency: 'EGP',
        },
        {
          VoucherId: '6248e7e135e24711aeafee5f',
          VoucherName: 'Pubg Mobile Free 60 UC - $0.99 Recharge Voucher',
          VoucherNameAr: 'بطاقة ببجي 1$',
          VoucharDesc: 'Free 60 UC - $0.99 Recharge Voucher',
          VoucharDescAr: 'بطاقة ٦٠ يو سي - $1',
          VoucherImage:
            'https://vqesportsplatform.s3.eu-west-3.amazonaws.com/products/PubG60060.png',
          PriceList: {
            MethodId: '2',
            Price: '19',
            Discount: '10%',
            DicountPrice: '17',
          },
          Available: 'true',
          Currency: 'EGP',
        },
      ],
    },
  });
});
exports.ReserveVoucher = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
    Success: true,
    VoucherStatus: 'Reserved',
    ReservationId: '6148c24afc2407ff0817f93f',
  });
});
exports.RedeemVoucher = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
    VoucherStatus: 'Reserved ',
    VoucherList: [
      {
        VoucherCode: '4ymVLEZU2M2271j6q2',
      },
    ],
  });
});
exports.ReleaseVoucher = catchAsync(async (req, res, next) => {
  res.status(201).json({
    Success: 'true',
  });
});
