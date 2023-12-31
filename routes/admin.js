const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');
const { isAuthenticated } = require('../middleware/authenticate');

router.post('/newAdmin', isAuthenticated, adminController.newAdmin);
router.delete('/deleteAdmin/:id', isAuthenticated, adminController.adminDelete);



module.exports = router;