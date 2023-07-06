const router =require('express').Router();
const dishesController= require('../controllers/dishes');

const validator = require("../middleware/validate")
const {isAuthenticated} = require("../middleware/authenticate");


//FALTA AGREGAR VALIDADOR

router.get('/',dishesController.getAllDishes);
router.get('/:id' ,dishesController.getSingleDish);
router.post('/' ,isAuthenticated,dishesController. newDish);
router.put('/:id',isAuthenticated,dishesController.updateDish);
router.delete('/:id' ,isAuthenticated,dishesController.deleteDish);

module.exports = router;
 