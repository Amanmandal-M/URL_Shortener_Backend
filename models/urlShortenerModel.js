const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    originalUrl : String,
    shortUrl : String,
    createdAt : String,
    location: String,
    ipAddress: String
});

const urlModel = mongoose.model('url', urlSchema);

module.exports = { urlModel };