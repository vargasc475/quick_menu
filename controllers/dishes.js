const db = require('../models');
const dishData = db.dishes;
const ObjectId = require('mongodb').ObjectId;
//const { ObjectId } = require('mongodb');


////////To create a new BOOK in database
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