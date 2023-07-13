const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

module.exports = (mongoose) => {
  const disheSchema = mongoose.Schema({
    id: {
      type: String
    },
    name: {
      type: String
    },
    weight: {
      type: String
    },
    people: {
      type: String
    },
    takeHome: {
      type: String
    },
    add: {
      type: Array
    },
    price: {
      type: String
    }
  });
  

  return mongoose.model('dishes', disheSchema)

}