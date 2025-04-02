const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const ownersSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
   
    products:{
        type:Array,
        default:[]
    },
   
    contact:Number,
    picture:String,
    gstin:String,
});

module.exports = mongoose.model('Owner', ownersSchema);
