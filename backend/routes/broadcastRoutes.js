const express = require('express');
const router = express.Router();
const {
  sendBroadcast,
  getBroadcasts,
} = require('../controllers/broadcastController');

// router.post('/', sendBroadcast);

router.route('/').get(getBroadcasts).post(sendBroadcast);

module.exports = router;
