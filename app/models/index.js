const config = require('../config/db.config');
const mongoose = require('mongoose');
const db = {};

mongoose.Promise = global.Promise;

db.mongoose = mongoose;
db.url = config.url;
db.note = require('./note.model.js')(mongoose);
db.publish = require('./publish.model.js')(mongoose);

module.exports = db;
