const router =require('express').Router();
const adminController= require('../controllers/admin');

const validator = require("../middleware/validate")
const {isAuthenticated} = require("../middleware/authenticate");


//FALTA AGREGAR VALIDADOR

router.get('/',adminController.getAllAdmins);
router.get('/:id' ,adminController.getSingleAdmin);
router.post('/' ,isAuthenticated,adminController. newAdmin);
router.put('/:id',isAuthenticated,adminController.updateAdmin);
router.delete('/:id' ,isAuthenticated,adminController.deleteAdmin);

module.exports = router;
 