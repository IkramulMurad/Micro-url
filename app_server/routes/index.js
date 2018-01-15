var express = require('express');
var router = express.Router();
var ctrlIndex = require('../controllers/index');
var ctrlOthers = require('../controllers/others');

/* GET home page. */
router.get('/', ctrlIndex.home);

/* GET others pages. */
router.get('/about', ctrlOthers.about);

module.exports = router;
