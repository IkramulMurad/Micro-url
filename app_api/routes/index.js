var express = require('express');
var router = express.Router();

var ctrlUsers = require('../controllers/users');
var ctrlMaps = require('../controllers/maps');
var ctrlOwners = require('../controllers/owners');

//users
router.get('/users', ctrlUsers.usersList);
router.post('/users', ctrlUsers.usersCreate);
router.get('/users/:email', ctrlUsers.usersReadOne);
router.put('/users/:userid', ctrlUsers.usersUpdateOne);
//router.delete('/users/:userid', ctrlUsers.usersDeleteOne);

//maps
router.post('/maps', ctrlMaps.mapsCreate);
router.get('/maps/url/:url', ctrlMaps.mapsReadKeys);
router.get('/maps/key/:key', ctrlMaps.mapsReadUrl);
//router.put('/maps/:mapid', ctrlMaps.mapsUpdateOne);
//router.delete('/maps/:mapid', ctrlMaps.mapsDeleteOne);

//owners
//router.get('/owners', ctrlOwners.ownersList);
router.post('/owners', ctrlOwners.ownersCreate);
router.get('/owners/:userid', ctrlOwners.ownersReadKeys);
//router.put('/owners/:userid', ctrlOwners.ownersUpdateOne);
router.delete('/owners/userid/:userid/key/:key', ctrlOwners.ownersDeleteOne);

module.exports = router;