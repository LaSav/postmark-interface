const express = require('express');
const router = express.Router();
const { getSubscribers } = require('../controllers/subscribersController');

router.get('/', getSubscribers);

module.exports = router;
