const express = require('express');
const router = express.Router();

const dishController = require('../controllers/dishes');
const { isAuthenticated } = require('../middleware/authenticate');

router.post('/newDish', isAuthenticated, dishController.newDish);
router.delete('/deleteDish/:id', isAuthenticated, dishController.deleteDish);



module.exports = router;