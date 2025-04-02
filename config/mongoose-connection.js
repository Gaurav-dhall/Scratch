const mongoose = require('mongoose');
const config = require('config');
const dbgre = require('debug')('development:mongoose-connection');

mongoose.connect(`${config.get('MONGODB_URI')}/Scratch`)
.then(() => {
    dbgre("MongoDB connected successfully");
})
.catch((err) => {
    dbgre("MongoDB connection error:", err);
})

module.exports = mongoose.connection;