var mongoose = require('mongoose');

var ownerSchema = new mongoose.Schema({
    userid : {
        type : String,
        required : true
    },
    key : {
        type : String,
        required : true
    }
});

mongoose.model('Owner', ownerSchema);