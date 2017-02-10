var express = require('express');
var router = express.Router();
var pageLoc;

/* GET home page. */
router.get('/', function(req, res, next) {
    pageLoc = 'index.html';
    res.sendfile(pageLoc);
    // res.render('index', { title: 'Express' });
    // //    res.sendfile('index.html');
});

router.get('/:reqDate', function(req, res, next) {
    res.render('index', { title: 'Express', reqDate: req.params.reqDate });
    // //    res.sendfile('index.html');
});

module.exports = router;