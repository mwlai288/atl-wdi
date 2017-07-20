/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
const bodyParser = require('body-parser');

/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;


/* set up the application params*/
const todosController = require('./controller/todos');

// log
app.use( logger('dev'));
app.use('/todos', todosController);
app.use(bodyParser.urlencoded({
    extended: true
}));

/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});


app.use('/todos', todosController);


// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
