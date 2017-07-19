
const express = require('express');

const app  = express();

const hbs = require('hbs');

app.set('view engine', 'hbs');


const port  = 3000;


const index_controller = require('./controller/index_controller');
app.use('/', index_controller);

const toppings_controller = require('./controller/toppings_controller');
app.use('/topping', toppings_controller);

const order_controller = require('./controller/order_controller');
app.use('/order', order_controller);



app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});