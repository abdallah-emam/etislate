const catchAsync = require('../utils/catchAsync');
// const Voucher = require('../models/VoucherModel');

exports.voucherDetails = catchAsync(async (req, res, next) => {
  res.status(201).json({
    Success: 'true',
    ErrorCode: 0,
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
    Success: 'true',
    ErrorCode: 0,
    VoucherStatus: 'Reserved',
    ReservationId: '6148c24afc2407ff0817f93f',
  });
});
exports.RedeemVoucher = catchAsync(async (req, res, next) => {
  res.status(201).json({
    Success: 'true',
    ErrorCode: 0,
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
    ErrorCode: 0,
  });
});

exports.oneVoucherDetails = catchAsync(async (req, res, next) => {
  res.status(201).json({
    data: {
      VoucherId: '62de674c2dd96b16db74af33',
      voucherName: 'LOL',
      voucherNameAr: 'ليج اوف لايجند',
      priceList: [
        {
          methodId: 'VISA',
          price: '100',
          discount: '10',
          discountPrice: '90',
        },
      ],
      gameDetails: {
        _id: '62c2dea203a9ccbbeb1f4dbc',
        gameName: 'LOL',
        gameNameAr: 'ليج اوف لايجند',
        gameIcon:
          'https://vqesportsplatform.s3.eu-west-3.amazonaws.com/logos/LOL+B.png',
      },
    },
    Success: 'true',
    ErrorCode: 0,
  });
});

exports.popularVouchers = catchAsync(async (req, res, next) => {
  res.status(201).json({
    data: {
      voucherList: [
        {
          VoucherId: '62a8b945f9138177590e4ad7',
          voucherName: 'Panda',
          voucherNameAr: 'Panda',
          currency: 'EGP',
          gameDetails: {
            _id: '62c2dea203a9ccbbeb1f4dbc',
            gameName: 'LOL',
            gameNameAr: 'ليج اوف لايجند',
            gameIcon:
              'https://vqesportsplatform.s3.eu-west-3.amazonaws.com/logos/LOL+B.png',
            removed: false,
            __v: 0,
            createdAt: '2022-07-05T18:24:41.091Z',
          },
        },
        {
          VoucherId: '62dd5f3179b8e2dbed54becc',
          voucherName: 'LOL ',
          voucherNameAr: 'لول 1 $',
          priceList: [
            {
              methodId: 'VISA',
              price: '100',
              discount: '10',
              discountPrice: '90',
            },
          ],
          gameDetails: {
            _id: '62c2dea203a9ccbbeb1f4dbc',
            gameName: 'LOL',
            gameNameAr: 'ليج اوف لايجند',
            gameIcon:
              'https://vqesportsplatform.s3.eu-west-3.amazonaws.com/logos/LOL+B.png',
            removed: false,
            __v: 0,
            createdAt: '2022-07-05T18:24:41.091Z',
          },
        },
      ],
    },
    Success: 'true',
    ErrorCode: 0,
  });
});
