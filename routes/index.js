const express = require('express');
const router = express.Router();
const passport = require('passport');


router.use('/', require('./dishes'));
router.use('/', require('./dessert'));
router.use('/', require('./admin'));
router.use('/', require('./order'));
router.use('/', require('./swaggerRoute'));
router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});


module.exports = router;