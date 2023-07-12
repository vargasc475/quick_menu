const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order');

router.post('/newOrder', orderController.newOrder);
router.delete('/deleteOrder/:id', orderController.orderDelete);



module.exports = router;