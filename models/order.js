const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

module.exports = (mongoose) => {
  const orderSchema = mongoose.Schema({
    dish: {
      type: String,
      required: true,
    },
    dessert: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: true,
    }
  });
  

  return mongoose.model('order', orderSchema)

}