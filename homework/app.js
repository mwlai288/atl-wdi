
var express = require('express');

var app     = express();

var port    = 3000;


app.get('/topping/olives', (req, res) => {

    res.send('Olives, are gross');
});


app.get('/order/:amount/:size', (req, res) => {

     res.send(`We would like ${req.params.amount} ${req.params.size} small pizzas now`);
 });





app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});