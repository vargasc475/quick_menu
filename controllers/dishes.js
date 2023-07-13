const db = require('../models');
const dishData = db.dishes;
const ObjectId = require('mongodb').ObjectId;
//const { ObjectId } = require('mongodb');

////////To get all the DISHes in database
exports.getAlldishes = async (req, res, next) => {
  try {
    const dishes = await dishData.find({});
    res.status(200).json(dishes);
  } catch (error) {
    res.status(400);
    next(error);
  }
};


////////To create a new DISH in database
exports.newDish = (req, res) => {

  const postDish = new dishData(req.body);

  postDish
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



////////METHOD To DELETE a DISH in database BY ID
exports.deleteDish = ('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteDish = await dishData.findByIdAndDelete(id);
    res.status(200).json(deleteDish);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

/*const mongodb =  require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllDishes = async (req,res)=>{
    const result = await mongodb.getDatabase().db().collection('dishes').find();
    result.toArray().then((users)=>{
   try{
      res.setHeader('Content-Type','application/json');
    res.status(200).json(users);
   }catch(err){
    res.status(400).json(err.message)
}})};

const getSingleDish = async (req,res)=>{
    const userId = new ObjectId(req.params.id);
    console.log(userId);
    const result = await mongodb.getDatabase().db().collection('dishes').find({_id:userId});
    result.toArray().then((users)=>{
    try{
    res.setHeader('Content-Type','application/json');
    res.status(200).json(users[0]);    
    }catch(err){
      res.status(400).json(err.message)
  }})};

const newDish =  async (req,res)=>{//POST
    const added = {

    
    };
    const result = await mongodb.getDatabase().db().collection('dishes').insertOne(added);
    if (result.acknowledged){
        res.status(201).json(result);
      }else{
        res.status(500).json(result.console.error('New Dish was no created'));
      }
       
};

const updateDish =  async (req,res)=>{ //PUT
    const userId = new ObjectId(req.params.id);
    const added = {
    
    };

    const result = await mongodb.getDatabase().db().collection('dishes').replaceOne({_id:userId},added);
    if (result.modifiedCount > 0){
        res.status(204).send();
      }else{
        res.status(500).json(result.console.error('Dish was not updated'));
      }
       
};

const deleteDish =  async (req,res)=>{ //DELETE
    const userId = new ObjectId(req.params.id);
 
    const result = await mongodb.getDatabase().db().collection('dishes').deleteOne({_id:userId},true);
    if (result.deletedCount > 0){
        res.status(200).send();
      }else{
        res.status(500).json(result.console.error('Dish was not deleted'));
      }
       
};


module.exports = {getAllDishes,getSingleDish, newDish,updateDish,deleteDish};*/