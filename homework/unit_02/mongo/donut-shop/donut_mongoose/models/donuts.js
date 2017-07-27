//requirements: require mongoose
var mongoose = require("mongoose");


//create your donut schema:
var donutSchema = new Schema({
//write your schema fields here

    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number

});

//export your donut with module.exports()
module.exports = donuts;