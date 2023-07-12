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