var cakeDB = require('mongoose');


var CommentSchema = new cakeDB.Schema({
    commentContent: {
        type: String,
        required: true,
        minlength: 1
    },
    rate: {
        type: String,
        required: true,
        minlength: 1
    }
})

var CakeSchema = new cakeDB.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    description:{
        type:String,
        required:true,
        minlength:1
    },
    imagePath: {
        type:String,
        required:true,
        minlength:1
    },  
    
    comments:[CommentSchema],

    created_at:{
        type:Date,
    },
    updated_at:{
        type:Date
    }

})

cakeDB.model('Cake',CakeSchema);
cakeDB.model('Comment', CommentSchema);

CakeSchema.Promise = global.Promise;
CommentSchema.promise = global.promise;
module.exports = {CakeSchema, CommentSchema};
