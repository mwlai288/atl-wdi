//requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//all routes for /pirate
/* INDEX pirates */
router.get('/', function(req,res) {
  res.render('index.hbs', {
    data: pirates,
  });
});

router.get('/', (req, res) => {
  res.render('pirates/new');
})



router.post('/', (req, res) => {
    console.log(req.body);

   const newPirate = {
        name: req.body.name,
        birthplace: req.body.birthplace,
        yearOfDeath: req.body.yearOfDeath,
        base: req.body.base,
        nickname: req.body.nickname
    };

   pirates.push(newPirate);

   res.redirect("/pirates");
});





module.exports = router;