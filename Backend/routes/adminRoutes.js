const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminControl');
const apiKeyMiddleware = require('../middleware/apiKeyMiddleware');

router.post('/addTrain', apiKeyMiddleware.verifyApiKey, adminControl.addTrain);
router.put('/update-seats/:trainId', apiKeyMiddleware.verifyApiKey, adminControl.updateTrainSeats);

module.exports = router;