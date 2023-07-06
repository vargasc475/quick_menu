const router =require('express').Router();
const dessertController= require('../controllers/desserts');

const validator = require("../middleware/validate")
const {isAuthenticated} = require("../middleware/authenticate");


//FALTA AGREGAR VALIDADOR

router.get('/',dessertController.getAllDesserts);
router.get('/:id' ,dessertController.getSingleDessert);
router.post('/' ,isAuthenticated,dessertController. newDessert);
router.put('/:id',isAuthenticated,dessertController.updateDessert);
router.delete('/:id' ,isAuthenticated,dessertController.deleteDessert);

module.exports = router;
 