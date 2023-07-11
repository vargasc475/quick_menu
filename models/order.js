const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
//const { desserts } = require('.');
const Schema = mongoose.Schema;
const dishes = mongoose.model('dishes');
const desserts = mongoose.model('desserts');


module.exports = (mongoose) => {
  const orderSchema = mongoose.Schema({
    client: {
      type: String,
      required: true,
    },
    table: {
      type: String,
      required: false,
    },
    dish : {
      type: Schema.Types.ObjectId, ref: 'dishes'
      },
       
   
    dessert : { type: Schema.Types.ObjectId, ref: 'desserts', required: false},
      
    
   
    totalPrice:{
      type: Number
    }

  });
  

  return mongoose.model('order', orderSchema)

}