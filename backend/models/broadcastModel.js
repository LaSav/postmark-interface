const mongoose = require('mongoose');

const broadcastSchema = mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Broadcast', broadcastSchema);
