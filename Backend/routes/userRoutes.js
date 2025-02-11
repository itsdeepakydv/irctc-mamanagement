const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControl');
const authController = require('../controllers/authControl');
const authMiddleware = require('../middleware/authMiddleware');


router.get('/availability', userControl.getSeatAvailability);
router.post('/register', authControl.register);
router.post('/login', authControl.login);
router.post('/book',  authMiddleware, userControl.bookSeat);
router.get('/getAllbookings', authMiddleware, userControl.getBookingDetails);


module.exports = router;
