const express = require('express');
const router = express.Router();

const dessertController = require('../controllers/dessert');

router.post('/newDessert', dessertController.newDessert);
router.delete('/deleteDessert/:id', dessertController.dessertDelete);



module.exports = router;