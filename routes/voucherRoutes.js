const express = require('express');
const vocherController = require('../controllers/voucherController');

const router = express.Router();

//   .get(jobHistoryController.getALlWorlHistoryForContractor);
/**
 * @swagger
 * components:
 *   schemas:
 *     GetVoucherDetails:
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
 *         Username: EtisalatMisr
 *         Hashing: afb920cc0cb6684a47ed85ad8b92ef5e
 *         GameId: 2
 *         Limit: 10
 *         Skip: 10
 */
router.post('/GetVoucherDetails', vocherController.voucherDetails);
/**
 * @swagger
 * tags:
 *   name: Voucher
 *   description: The Voucher managing API
 */
/**
 * @swagger
 * /api/GetVoucherDetails:
 *   post:
 *     summary: Voucher Details
 *     tags: [Voucher]
 *     requestBody:
 *       required: Siu
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GetVoucherDetails'
 *     responses:
 *       200:
 *         description: done
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetVoucherDetails'
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
 *         Username: EtisalatMisr
 *         Hashing: afb920cc0cb6684a47ed85ad8b92ef5e
 *         MSISDN: 01110334557
 *         VoucherList:
 *             {VoucherId: "6248eddccff25dc9fe6734e0",
 *             count:1}
 *         PayMethod: "2"
 */
router.post('/ReserveVoucher', vocherController.ReserveVoucher);
/**
 * @swagger
 * /api/ReserveVoucher:
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
 *         Username: EtisalatMisr
 *         Hashing: 8cec969f649a8ec6f4005cb1a8afd99a
 *         ReservationId: 6148c24afc2407ff0817f93f
 */
router.post('/RedeemVoucher', vocherController.RedeemVoucher);
/**
 * @swagger
 * /api/RedeemVoucher:
 *   post:
 *     summary: Redeem Voucher
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
 *         Username: EtisalatMisr
 *         Hashing: afb920cc0cb6684a47ed85ad8b92ef5e
 *         ReservationId: 6148c24afc2407ff0817f93f
 */
router.post('/ReleaseVoucher', vocherController.ReleaseVoucher);
/**
 * @swagger
 * /api/ReleaseVoucher:
 *   post:
 *     summary: Release Voucher
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
// -------------------------------------------------------------------------------------------//
/**
 * @swagger
 * components:
 *   schemas:
 *     oneVoucherDetails:
 *       type: object
 *       required:
 *         - Username
 *         - Hashing
 *         - voucherId
 *       properties:
 *         Username:
 *           type: string
 *           description: Username to be used by Server
 *         Hashing:
 *           type: string - MD5
 *           description: “Username + Secret Key” hashed using MD5
 *         voucherId:
 *           type: string
 *           description: Voucher ID from the Voucher Details request
 *       example:
 *         Username: EtisalatMisr
 *         Hashing: afb920cc0cb6684a47ed85ad8b92ef5e
 *         voucherId: 62ded7eb6610bde68f08d233
 */
router.post('/oneVoucherDetails', vocherController.oneVoucherDetails);
/**
 * @swagger
 * /api/oneVoucherDetails:
 *   post:
 *     summary: one Voucher Details
 *     tags: [Voucher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/oneVoucherDetails'
 *     responses:
 *       200:
 *         description: done
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/oneVoucherDetails'
 *       500:
 *         description: Some server error
 */
// -------------------------------------------------------------------------------------------//
/**
 * @swagger
 * components:
 *   schemas:
 *     popularVouchers:
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
 *         Username: EtisalatMisr
 *         Hashing: afb920cc0cb6684a47ed85ad8b92ef5e
 *         Limit: 10
 *         Skip: 10
 */
router.post('/popularVouchers', vocherController.popularVouchers);
/**
 * @swagger
 * /api/popularVouchers:
 *   post:
 *     summary: Popular Vouchers Details
 *     tags: [Voucher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/popularVouchers'
 *     responses:
 *       200:
 *         description: done
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/popularVouchers'
 *       500:
 *         description: Some server error
 */
module.exports = router;
