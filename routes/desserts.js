const router =require('express').Router();
const dessertController= require('../controllers/desserts');

//const validator = require("../middleware/validate")
//const {isAuthenticated} = require("../middleware/authenticate");


//FALTA AGREGAR VALIDADOR

router.get('/',dessertController.getAllDesserts);
router.post('/' ,dessertController. newDessert);
router.delete('/:id' ,dessertController.deleteDessert);

module.exports = router;
 