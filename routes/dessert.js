const express = require('express');
const router = express.Router();

const dessertController = require('../controllers/dessert');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/getDesserts', dessertController.getAlldesserts);
router.post('/newDessert', isAuthenticated, dessertController.newDessert);
router.delete('/deleteDessert/:id', isAuthenticated, dessertController.dessertDelete);



module.exports = router;