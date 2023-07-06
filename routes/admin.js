const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.post('/newAdmin', adminController.newAdmin);
router.delete('/deleteAdmin/:id', adminController.adminDelete);



module.exports = router;