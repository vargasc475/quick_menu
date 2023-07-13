const db = require('../models');
const orderData = db.orders;

const ObjectId = require('mongodb').ObjectId;



////////To get all the ADMINS in database

exports.getAllorders = async (req, res, next) => {
  try {
    const orders = await orderData.find({}).populate('dish', 'name').populate('dessert', 'id');
    res.status(200).json(orders);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

/*
exports.getAllorders = function (req, res){
  orderData.find({}, function (err, orders) {
    dishesData.populate(orders, { path: "dishes" }, function (err, orders) {
      res.status(200).send(orders);
    });
  });
};*/

////////To create a new ORDER in database
exports.newOrder = (req, res) => {

  const postOrder = new orderData(req.body);

  postOrder
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the user.'
      });
    });
};



////////METHOD To DELETE ORDER in database BY ID
exports.orderDelete = ('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const orderToDelete = await orderData.findByIdAndDelete(id);
    res.status(200).json(this.orderToDelete);
  } catch (error) {
    res.status(400);
    next(error);
  }
});
/*const mongodb =  require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllOrders = async (req,res)=>{
    const result = await mongodb.getDatabase().db().collection('orders').find();
    result.toArray().then((users)=>{
   try{
      res.setHeader('Content-Type','application/json');
    res.status(200).json(users);
   }catch(err){
    res.status(400).json(err.message)
}})};

const getSingleOrder = async (req,res)=>{
    const userId = new ObjectId(req.params.id);
    console.log(userId);
    const result = await mongodb.getDatabase().db().collection('orders').find({_id:userId});
    result.toArray().then((users)=>{
    try{
    res.setHeader('Content-Type','application/json');
    res.status(200).json(users[0]);    
    }catch(err){
      res.status(400).json(err.message)
  }})};

const newOrder =  async (req,res)=>{//POST
    const added = {

      
    };
    const result = await mongodb.getDatabase().db().collection('orders').insertOne(added);
    if (result.acknowledged){
        res.status(201).json(result);
      }else{
        res.status(500).json(result.console.error('New Order was no created'));
      }
       
};

const updateOrder =  async (req,res)=>{ //PUT
    const userId = new ObjectId(req.params.id);
    const added = {

    };

    const result = await mongodb.getDatabase().db().collection('orders').replaceOne({_id:userId},added);
    if (result.modifiedCount > 0){
        res.status(204).send();
      }else{
        res.status(500).json(result.console.error('Order was not updated'));
      }
       
};

const deleteOrder =  async (req,res)=>{ //DELETE
    const userId = new ObjectId(req.params.id);
 
    const result = await mongodb.getDatabase().db().collection('orders').deleteOne({_id:userId},true);
    if (result.deletedCount > 0){
        res.status(200).send();
      }else{
        res.status(500).json(result.console.error('Order was not deleted'));
      }
       
};


module.exports = {getAllOrders,getSingleOrder, newOrder,updateOrder,deleteOrder};*/