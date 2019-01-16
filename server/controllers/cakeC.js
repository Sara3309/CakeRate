var cakeDB = require('mongoose');
var Cake = cakeDB.model('Cake');
var Comment = cakeDB.model('Comment');
var bodyParser = require('body-parser');


module.exports = {
    index: function(req, res){
   
        Cake.find({}, function(err, cake){
            if(err){
               console.log("Returned error", err);
              
               res.json({message: "Error", error: err})
            }
            else {
              
               res.json({message: "Success", data: cake})
            }
         })
     
    },

    createCake: function (req, res) {
        
        var cake = new Cake ({
            name: req.body.name,
            description: req.body.description,
            imagePath: req.body.imagePath
        });
        cake.save(function(err){
            if (err) {
                console.log("we are having error");
                res.json({message: "Error", error: err})
            }
            else {
                console.log("saved");
                res.json({message: "Success"})
            }
        })
    },
    createComment: function (req, res) {
      
        var comment = new Comment ({
            commentContent: req.body.commentContent,
            rate: req.body.rate
        });
         Cake.findOneAndUpdate({_id: req.params.id}, {$push: {comments: comment}}, function(err, comment){
                    if(err){
                        console.log("errors here", err);
                    }
                    else {
                         console.log("comment saved");
                    }
         })
    },
 
    find: function(req,res) {
        Cake.find({_id: req.params.id}, function(err, cake){
            if(err){
               console.log("Returned error", err);
              
               res.json({message: "Error", error: err})
            }
            else {
               console.log(req);
               res.json({message: "Success", data: cake})
            }
         })
    },


    remove: function(req, res){
        Cake.remove({
            _id:req.params.id
        }, function (err) {
            if(err){
                console.log("Returned error", err);
               
                res.json({message: "Error", error: err})
             }
             else {
                
                res.json({message: "Success"})
             }
          })
    },

    update: function(req, res){
        Cake.update({_id:req.params.id}, req.body,{runValidators: true},function(err){
            if(err){
                console.log("Returned error", err);
               
                res.json({message: "Error", error: err})
             }
             else {
                
                res.json({message: "Success"})
             }
           })
    }

}

