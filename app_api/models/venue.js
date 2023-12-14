var mongoose = require( "mongoose" );

var venue = new mongoose.Schema({
    name: {type:String,required:true},
    adress: String,
    rating: {type:Number,min:0,max:5,default:0},
    coordinates:{type:Number,index:"2dsphere"},
    foodanddrink: [String],
    hours:[hour],
    comments:[comment]
 });
//hour ve comment için şema tanımlamaları
 var hour = new mongoose.Schema(
    {
        days:{type:String,required:true},
        open:String,
        close:String,
        isClosed:{type:Boolean,required:false}
    }
 );

 var comment = new mongoose.Schema(
    {
        author: {type:String,required:true},
        rating:{type:Number,required:true,min:0,max:5},
        text:{type:String,required:true},
        date:{type:Date,default:Date.now}
    }
 );