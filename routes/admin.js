const router =require('express').Router();
const adminController= require('../controllers/admin');

//const validator = require("../middleware/validate")
//const {isAuthenticated} = require("../middleware/authenticate");


//FALTA AGREGAR VALIDADOR

router.get('/',adminController.getAllAdmins);
router.post('/' ,adminController. newAdmin);
router.delete('/:id' ,adminController.deleteAdmin);

module.exports = router;
 