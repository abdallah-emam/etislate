const express = require('express');
const vocherController = require('../controllers/voucherController');

const router = express.Router();

//   .get(jobHistoryController.getALlWorlHistoryForContractor);
/**
 * @swagger
 * components:
 *   schemas:
 *     voucherDetails:
 *       type: object
 *       required:
 *         - Username
 *         - Hashing
 *         - GameId
 *         - Limit
 *         - Skip
 *       properties:
 *         Username:
 *           type: string
 *           description: Username to be used by Server
 *         Hashing:
 *           type: string - MD5
 *           description: “Username + Secret Key” hashed using MD5
 *         GameId:
 *           type: init
 *           description: Game Id to be used to get the related vouchers
 *         Limit:
 *           type: init
 *           description: Limit for number of retrieved items in the list
 *         Skip:
 *           type: init
 *           description: Skip number of items in the list
 *       example:
 *         userNama: EtisalatMisr
 *         Hashing: afb920cc0cb6684a47ed85ad8b92ef5e
 *         GameId: 2
 *         Limit: 10
 *         Skip: 10
 */
router.post('/voucherDetails', vocherController.voucherDetails);
/**
 * @swagger
 * tags:
 *   name: Voucher
 *   description: The Game managing API
 */
/**
 * @swagger
 * /api/v1/voucher/voucherDetails:
 *   post:
 *     summary: Voucher Details
 *     tags: [Voucher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/voucherDetails'
 *     responses:
 *       200:
 *         description: done
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/voucherDetails'
 *       500:
 *         description: Some server error
 */
// -------------------------------------------------------------------------------------------//
/**
 * @swagger
 * components:
 *   schemas:
 *     ReserveVoucher:
 *       type: object
 *       required:
 *         - Username
 *         - Hashing
 *         - MSISDN
 *         - VoucherList
 *         - Count
 *         - PayMethod
 *       properties:
 *         Username:
 *           type: string
 *           description: Username to be used by Server
 *         Hashing:
 *           type: string - MD5
 *           description: “Username + Secret Key” hashed using MD5
 *         MSISDN:
 *           type: init
 *           description: The customer MSISDN
 *         VoucherList:
 *           type: object
 *           properties:
 *              VoucherId:
 *                type: init
 *                description: Voucher Id for each
 *              count:
 *                type: string
 *                description: Number of vouchers
 *         Count:
 *           type: init
 *           description: Number of vouchers
 *         PayMethod:
 *           type: init
 *           description: Payment Method ID (1- ICB, 2-Wallet, 3-Credit Card, 4-Cash)
 *       example:
 *         userNama: EtisalatMisr
 *         Hashing: afb920cc0cb6684a47ed85ad8b92ef5e
 *         MSISDN: 01110334557
 *         VoucherList:
 *             {VoucherId: "6248eddccff25dc9fe6734e0",
 *             count:1}
 *         PayMethod: "2"
 */
router.post('/reserveVoucher', vocherController.ReserveVoucher);
/**
 * @swagger
 * /api/v1/voucher/reserveVoucher:
 *   post:
 *     summary: Reserve Voucher
 *     tags: [Voucher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReserveVoucher'
 *     responses:
 *       200:
 *         description: done
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReserveVoucher'
 *       500:
 *         description: Some server error
 */
// -------------------------------------------------------------------------------------------//
/**
 * @swagger
 * components:
 *   schemas:
 *     voucherRedeem:
 *       type: object
 *       required:
 *         - Username
 *         - Hashing
 *         - ReservationId
 *       properties:
 *         Username:
 *           type: string
 *           description: Username to be used by Server
 *         Hashing:
 *           type: string - MD5
 *           description: “Username + Secret Key” hashed using MD5
 *         ReservationId:
 *           type: string
 *           description: Reservation ID from the Reservation request
 *       example:
 *         userNama: EtisalatMisr
 *         Hashing: 8cec969f649a8ec6f4005cb1a8afd99a
 *         ReservationId: 6148c24afc2407ff0817f93f
 */
router.post('/voucherRedeem', vocherController.RedeemVoucher);
/**
 * @swagger
 * /api/v1/voucher/voucherRedeem:
 *   post:
 *     summary: Voucher Redeem
 *     tags: [Voucher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/voucherRedeem'
 *     responses:
 *       200:
 *         description: done
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/voucherRedeem'
 *       500:
 *         description: Some server error
 */
// -------------------------------------------------------------------------------------------//
/**
 * @swagger
 * components:
 *   schemas:
 *     ReleaseVoucher:
 *       type: object
 *       required:
 *         - Username
 *         - Hashing
 *         - ReservationId
 *       properties:
 *         Username:
 *           type: string
 *           description: Username to be used by Server
 *         Hashing:
 *           type: string - MD5
 *           description: “Username + Secret Key” hashed using MD5
 *         ReservationId:
 *           type: string
 *           description: Reservation ID from the Reservation request
 *       example:
 *         userNama: EtisalatMisr
 *         Hashing: afb920cc0cb6684a47ed85ad8b92ef5e
 *         ReservationId: 6148c24afc2407ff0817f93f
 */
router.post('/ReleaseVoucher', vocherController.ReleaseVoucher);
/**
 * @swagger
 * /api/v1/voucher/ReleaseVoucher:
 *   post:
 *     summary: Voucher Release
 *     tags: [Voucher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReleaseVoucher'
 *     responses:
 *       200:
 *         description: done
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReleaseVoucher'
 *       500:
 *         description: Some server error
 */
module.exports = router;
