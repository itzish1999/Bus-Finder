const express = require('express');
const router = express.Router();
const busStopController = require('../controllers/busStopController');

router.post('/bus-stops', busStopController.getBusStop);

module.exports = router;