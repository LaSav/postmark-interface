const asyncHandler = require('express-async-handler');
const Subscriber = require('../models/subscriberModel');

// @desc    Get Subscribers
// @route   GET /api/subscribers
// @access  Public (local)
const getSubscribers = asyncHandler(async (req, res) => {
  const subscribers = await Subscriber.find();
  const subscribersEmails = subscribers.map((subscriber) => subscriber.email);
  console.log(subscribersEmails);
  res.status(200).json(subscribers);
});

module.exports = { getSubscribers };
