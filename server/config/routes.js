var cakeDB = require('mongoose');
var Cake = cakeDB.model('Cake');
var Comment = cakeDB.model('Comment');
var cakeC = require("../controllers/cakeC.js");

module.exports = function (app) {
    app.get('/tasks', function (req, res) {
        cakeC.index(req,res);
    })
    
    app.post('/new', function (req, res) {
       
        cakeC.createCake(req, res);

    })
    app.post('/new/comment/:id', function(req,res){
        cakeC.createComment(req,res);
    })

    app.delete('/remove/:id', function (req, res) {
        cakeC.remove(req,res);
    
    })
    app.get("/byID/:id", function (req, res) {
        cakeC.find(req,res);
    })
    app.put("/update/:id", function(req, res) {
        cakeC.update(req, res);
    })
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("../../public/dist/public/index.html"))
    });

}
