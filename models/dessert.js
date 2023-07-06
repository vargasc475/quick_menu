const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

module.exports = (mongoose) => {
  const dessertSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    }
  });
  

  return mongoose.model('desserts', dessertSchema)

}