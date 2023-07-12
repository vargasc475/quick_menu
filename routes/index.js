const express = require('express');
const router = express.Router();


router.use('/', require('./dishes'));
router.use('/', require('./dessert'));
router.use('/', require('./admin'));
router.use('/', require('./order'));
router.use('/', require('./swaggerRoute'));

module.exports = router;