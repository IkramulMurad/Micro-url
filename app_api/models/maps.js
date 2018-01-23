var mongoose = require('mongoose');

var mapSchema = new mongoose.Schema({
    key : {
        type : String,
        required : true,
        unique : true
    },
    url : {
        type : String,
        required : true
    }
});

mongoose.model('Map', mapSchema);