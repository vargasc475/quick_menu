const mongodb =  require('../data/database');
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

        /*
        Name: req.body.Name,                INDICAR CAMPOS
        Capital: req.body.Capital,
        area: req.body.area,
        habitants: req.body.habitants,
        independence: req.body.independence,
        continent:req.body.continent */
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
     /* Name: req.body.Name,        INDICAR CAMPOS
      Capital: req.body.Capital,
      area: req.body.area,
      habitants: req.body.habitants,
      independence: req.body.independence,
      continent:req.body.continent */
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


module.exports = {getAllDishes,getSingleDish, newDish,updateDish,deleteDish};