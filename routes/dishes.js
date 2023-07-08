const express = require('express');
const router = express.Router();

const dishController = require('../controllers/dishes');

router.get('/getDishes', dishController.getAlldishes);
router.post('/newDish', dishController.newDish);
router.delete('/deleteDish/:id', dishController.deleteDish);



module.exports = router;