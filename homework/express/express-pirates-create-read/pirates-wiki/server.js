const express = require('express');
const hbs = require('hbs');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'hbs');





app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("hello-express is running on port " + port);
});
	
