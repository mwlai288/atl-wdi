const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
const TodontController = require('./controller/ToDont');




app.use('/ToDont', ToDontController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("hello-express is running on port " + port);
});

