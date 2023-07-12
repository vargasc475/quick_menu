const db = require('../models');
const dessertData = db.dessets;
const ObjectId = require('mongodb').ObjectId;
//const { ObjectId } = require('mongodb');


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