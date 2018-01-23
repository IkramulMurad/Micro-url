var helper = require('./helper');
var mongoose = require('mongoose');
var Map = mongoose.model('Map');

module.exports.mapsReadUrl = function(req, res) {
    if(!req.params || !req.params.key){
        helper.sendJsonResponse(res, 404, {
            "message" : "No key in the request!"
        });
        return;
    }
    Map
        .find({"key" : req.params.key})
        .exec(function(err, result){
            if(!result || !result.length){
                helper.sendJsonResponse(res, 404, {
                    "message" : "No url found!"
                });
                return;
            }
            else if(err){
                helper.sendJsonResponse(res, 404, err);
                return;
            }
            helper.sendJsonResponse(res, 200, result);
        });
};

module.exports.mapsReadKeys = function(req, res) {
    if(!req.params || !req.params.url){
        helper.sendJsonResponse(res, 404, {
            "message" : "No url in the request!"
        });
        return;
    }
    Map
        .find({"url" : req.params.url})
        .exec(function(err, result){
            if(!result || !result.length){
                helper.sendJsonResponse(res, 404, {
                    "message" : "No keys found!"
                });
                return;
            }
            else if(err){
                helper.sendJsonResponse(res, 404, err);
                return;
            }
            helper.sendJsonResponse(res, 200, result);
        });
};

module.exports.mapsCreate = function(req, res) {
    if(!req.body || !req.body.key || !req.body.url){
        helper.sendJsonResponse(res, 400, {
            "message" : "All the fields key and url are required!"
        });
        return;
    }

    var data = {
        key : req.body.key,
        url : req.body.url
    };

    Map.create(data, function(err, result){
        if(err){
            helper.sendJsonResponse(res, 400, err);
        }
        else{
            helper.sendJsonResponse(res, 201, result);
        }
    });
};