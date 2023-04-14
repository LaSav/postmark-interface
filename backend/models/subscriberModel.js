const mongoose = require('mongoose');

const subscriberSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
    },
    subscribed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Subscriber', subscriberSchema);
