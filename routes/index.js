const express = require('express');
const router = express.Router();
const passport = require('passport');
router.use('/',require("./swagger"));
router.use('/admin',require("./amin"));
router.use('/desserts',require("./desserts"));
router.use('/dishes',require("./dishes"));
router.use('/orders',require("./orders"));

/*
router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next){
    req.logout(function(err){
        if (err) { return next(err);}
        res.direct('/')
    });
});*/


module.exports = router;