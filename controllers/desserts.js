const db = require('../models');
const dessertData = db.desserts;
const ObjectId = require('mongodb').ObjectId;
//const { ObjectId } = require('mongodb');



////////To get all the DESSERTS in database
exports.getAlldesserts = async (req, res, next) => {
  try {
    const desserts = await dessertData.find({});
    res.status(200).json(desserts);
  } catch (error) {
    res.status(400);
    next(error);
  }
};


////////To create a new DESSERT in database
exports.newDessert = (req, res) => {

  const postDessert = new dessertData(req.body);

  postDessert
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



////////METHOD To DELETE a DESSERT in database BY ID
exports.dessertDelete = ('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const dessertToDelete = await dessertData.findByIdAndDelete(id);
    res.status(200).json(this.dessertToDelete);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

/*const mongodb =  require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllDesserts = async (req,res)=>{
    const result = await mongodb.getDatabase().db().collection('desserts').find();
    result.toArray().then((users)=>{
   try{
      res.setHeader('Content-Type','application/json');
    res.status(200).json(users);
   }catch(err){
    res.status(400).json(err.message)
}})};

const getSingleDessert = async (req,res)=>{
    const userId = new ObjectId(req.params.id);
    console.log(userId);
    const result = await mongodb.getDatabase().db().collection('desserts').find({_id:userId});
    result.toArray().then((users)=>{
    try{
    res.setHeader('Content-Type','application/json');
    res.status(200).json(users[0]);    
    }catch(err){
      res.status(400).json(err.message)
  }})};

const newDessert =  async (req,res)=>{//POST
    const added = {

        
        Name: req.body.Name,                INDICAR CAMPOS
        Capital: req.body.Capital,
        area: req.body.area,
        habitants: req.body.habitants,
        independence: req.body.independence,
        continent:req.body.continent 
    };
    const result = await mongodb.getDatabase().db().collection('desserts').insertOne(added);
    if (result.acknowledged){
        res.status(201).json(result);
      }else{
        res.status(500).json(result.console.error('New Dessert was no created'));
      }
       
};

const updateDessert =  async (req,res)=>{ //PUT
    const userId = new ObjectId(req.params.id);
    const added = {
     Name: req.body.Name,        INDICAR CAMPOS
      Capital: req.body.Capital,
      area: req.body.area,
      habitants: req.body.habitants,
      independence: req.body.independence,
      continent:req.body.continent 
    };

    const result = await mongodb.getDatabase().db().collection('desserts').replaceOne({_id:userId},added);
    if (result.modifiedCount > 0){
        res.status(204).send();
      }else{
        res.status(500).json(result.console.error('Dessert was not updated'));
      }
       
};

const deleteDessert =  async (req,res)=>{ //DELETE
    const userId = new ObjectId(req.params.id);
 
    const result = await mongodb.getDatabase().db().collection('desserts').deleteOne({_id:userId},true);
    if (result.deletedCount > 0){
        res.status(200).send();
      }else{
        res.status(500).json(result.console.error('Dessert was not deleted'));
      }
       
};


module.exports = {getAllDesserts,getSingleDessert, newDessert,updateDessert,deleteDessert};*/