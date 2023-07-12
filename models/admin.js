const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

module.exports = (mongoose) => {
  const adminSchema = mongoose.Schema({
    user: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  });
  

  return mongoose.model('admin', adminSchema)

}