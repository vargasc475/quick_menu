const express = require('express');
const router = express.Router();


router.use('/', require('./dishes'));
router.use('/', require('./dessert'));
router.use('/', require('./admin'));
router.use('/', require('./order'));

module.exports = router;