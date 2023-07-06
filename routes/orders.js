const router =require('express').Router();
const ordersController= require('../controllers/orders');

const validator = require("../middleware/validate")
const {isAuthenticated} = require("../middleware/authenticate");

//FALTA AGREGAR VALIDADOR

router.get('/',ordersController.getAllOrders);
router.get('/:id' ,ordersController.getSingleOrder);
router.post('/' ,isAuthenticated,ordersController. newOrder);
router.put('/:id',isAuthenticated,ordersController.updateOrder);
router.delete('/:id' ,isAuthenticated,ordersController.deleteOrder);

module.exports = router;
 