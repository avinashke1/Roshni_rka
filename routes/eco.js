var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('eco', {
        title: 'Roshni Eco'

    });  //Using index.ejs as view
});

module.exports = router;
