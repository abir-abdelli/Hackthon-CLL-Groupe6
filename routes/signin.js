var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve('../src/public/HTML/login.html'));
});

module.exports = router;
