const db = require('../models');
const adminData = db.admins;
const ObjectId = require('mongodb').ObjectId;



////////To create a new ADMIN in database
exports.newAdmin = (req, res) => {

  const postAdmin = new adminData(req.body);

  postAdmin
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



////////METHOD To DELETE ADMIN in database BY ID
exports.adminDelete = ('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const adminToDelete = await adminData.findByIdAndDelete(id);
    res.status(200).json(this.adminToDelete);
  } catch (error) {
    res.status(400);
    next(error);
  }
});