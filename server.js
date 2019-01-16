var express = require("express");
var path = require("path");
var app = express();
var cakeDB = require('mongoose');
var bodyParser = require('body-parser');


app.use(express.static( __dirname + '/public/dist/public' )); 
cakeDB.connect('mongodb://localhost/basic_mongoose');
require("./server/config/mongoose.js");

app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
require("./server/config/routes.js")(app)


app.listen(8000, function () {
    console.log("listening on port 8000");
})