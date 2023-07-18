const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

module.exports = (mongoose) => {
  const dessertSchema = mongoose.Schema({
    id: {
      type: String
    },
    name: {
      type: String
    },
    people: {
      type: Number
    },
    takeHome: {
      type: String
    },
    price: {
      type: Number
    }
  });
  

  return mongoose.model('desserts', dessertSchema)

}