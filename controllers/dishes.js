const db = require('../models');
const dishData = db.dishes;
const ObjectId = require('mongodb').ObjectId;
//const { ObjectId } = require('mongodb');


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