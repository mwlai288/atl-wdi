const express = require('express');
const router = express.Router();
const data = require('../data.js');


router.get('/', (req,res) => {
  res.render('todonts/index', {
    data: data.seededToDonts
  });
});

router.get('/new', (req, res) => {
  res.render('todonts/new');
})

router.get('/show/:id', (req, res) => {
  const id = req.params.id;
  const todont = data.seededToDonts[id];
  res.render('todonts/show',{
    todont: todont,
    id: id, 
  });
});

// router.get ('/:id', (req, res) => {

// });




module.exports = router