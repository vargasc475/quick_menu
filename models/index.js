const dbConfig = require('../db/connection');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.dishes = require('./dishes.js')(mongoose);
db.dessets = require('./dessert')(mongoose);
db.admins = require('./admin')(mongoose);
db.orders = require('./order')(mongoose);


module.exports = db;