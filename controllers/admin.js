const mongodb =  require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllAdmins = async (req,res)=>{
    const result = await mongodb.getDatabase().db().collection('admin').find();
    result.toArray().then((users)=>{
   try{
      res.setHeader('Content-Type','application/json');
    res.status(200).json(users);
   }catch(err){
    res.status(400).json(err.message)
}})};

const getSingleAdmin = async (req,res)=>{
    const userId = new ObjectId(req.params.id);
    console.log(userId);
    const result = await mongodb.getDatabase().db().collection('admin').find({_id:userId});
    result.toArray().then((users)=>{
    try{
    res.setHeader('Content-Type','application/json');
    res.status(200).json(users[0]);    
    }catch(err){
      res.status(400).json(err.message)
  }})};

const newAdmin =  async (req,res)=>{//POST
    const added = {

        /*
        Name: req.body.Name,                INDICAR CAMPOS
        Capital: req.body.Capital,
        area: req.body.area,
        habitants: req.body.habitants,
        independence: req.body.independence,
        continent:req.body.continent */
    };
    const result = await mongodb.getDatabase().db().collection('admin').insertOne(added);
    if (result.acknowledged){
        res.status(201).json(result);
      }else{
        res.status(500).json(result.console.error('New admin was no created'));
      }
       
};

const updateAdmin =  async (req,res)=>{ //PUT
    const userId = new ObjectId(req.params.id);
    const added = {
     /* Name: req.body.Name,        INDICAR CAMPOS
      Capital: req.body.Capital,
      area: req.body.area,
      habitants: req.body.habitants,
      independence: req.body.independence,
      continent:req.body.continent */
    };

    const result = await mongodb.getDatabase().db().collection('admin').replaceOne({_id:userId},added);
    if (result.modifiedCount > 0){
        res.status(204).send();
      }else{
        res.status(500).json(result.console.error('Admin was not updated'));
      }
       
};

const deleteAdmin =  async (req,res)=>{ //DELETE
    const userId = new ObjectId(req.params.id);
 
    const result = await mongodb.getDatabase().db().collection('admin').deleteOne({_id:userId},true);
    if (result.deletedCount > 0){
        res.status(200).send();
      }else{
        res.status(500).json(result.console.error('admin was not deleted'));
      }
       
};


module.exports = {getAllAdmins,getSingleAdmin, newAdmin,updateAdmin,deleteAdmin};