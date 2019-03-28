var mongoose = require('mongoose');

var customers = new mongoose.Schema({
    facebookId: {
        type: String,
        required: true
    },
    fullName: {
        type: String
    }
})

module.exports = customers