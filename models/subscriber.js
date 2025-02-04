const mongoose = require("mongoose");

const subscriberSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedTo: {
    type: String,
    required: true
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model("Subscriber", subscriberSchema);