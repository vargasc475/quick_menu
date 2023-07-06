const express = require('express');
const router = express.Router();

const dishController = require('../controllers/dishes');

router.post('/newDish', dishController.newDish);



module.exports = router;