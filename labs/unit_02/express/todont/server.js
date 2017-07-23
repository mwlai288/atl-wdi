const express = require('express');
const hbs = require('hbs');
const app = express();
const todontController = require('./controller/todont_controller')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');



app.set('view engine', 'hbs');


app.use('/todont', todontController);




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("hello-express is running on port " + port);
});