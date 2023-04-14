const asyncHandler = require('express-async-handler');
const Broadcast = require('../models/broadcastModel');
// var postmark = require('postmark');
const Subscriber = require('../models/subscriberModel');

// const sendBroadcast = asyncHandler(async (req, res) => {
//   const { email, templateNumber } = req.body;

//   if (!email) {
//     res.status(400);
//     throw new Error('Please add a text field');
//   }
//   if (!templateNumber) {
//     res.status(400);
//     throw new Error('Template Number Required');
//   }

//   res.status(200).json({ message: 'Broadcast successfully sent' });
// });

const getBroadcasts = asyncHandler(async (req, res) => {
  const broadcasts = await Broadcast.find();
  res.status(200).json(broadcasts);
});

const sendBroadcast = asyncHandler(async (req, res) => {
  const { templateNumber } = req.body;
  if (!templateNumber) {
    res.status(400);
    throw new Error('Template number required');
  }
  const subscribers = await Subscriber.find();

  const subscribersEmails = subscribers.map((subscriber) => subscriber.email);
  console.log(subscribersEmails);

  const broadcast = await Broadcast.create({});

  console.log(broadcast);

  // var client = new postmark.ServerClient(process.env.POSTMARK_KEY);

  // client.sendEmail({
  //   From: 'service@boundnetwork.com',
  //   To: subscribersEmails[1],
  //   Subject: 'Hello from Postmark',
  //   HtmlBody: `<strong>Hello</strong> dear savva.`,
  //   TextBody: 'Hello from Postmark!',
  //   MessageStream: 'welcome-message',
  // });

  res.status(200).json({ message: 'Broadcast successfully sent' });
});

module.exports = { getBroadcasts, sendBroadcast };
