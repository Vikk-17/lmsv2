const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  payerId: {
    type: String,
    required: true,
  },
  instructorId: {
    type: String,
    required: true,
  },
  instructorName: {
    type: String,
    required: true,
  },

  courseImage: {
    type: String,
    required: true,
  },

  // try to assign Course table as the reference table for below attrs
  courseTitle: String,
  courseId: String,
  coursePricing: String,
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
