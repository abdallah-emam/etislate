const express = require('express');
const vocherController = require('../controllers/voucherController');

const router = express.Router();

//   .get(jobHistoryController.getALlWorlHistoryForContractor);

router.post('/voucherDetails', vocherController.voucherDetails);
router.post('/reserveVoucher', vocherController.ReserveVoucher);
router.post('/voucherRedeem', vocherController.RedeemVoucher);
router.post('/ReleaseVoucher', vocherController.ReleaseVoucher);

module.exports = router;
