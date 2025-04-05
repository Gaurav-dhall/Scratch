const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
    cart:{
        type:Array,
        default:[]
    },
    orders:{
        type:Array,
        default:[]
    },

    contact:Number,
    picture:String,
});

module.exports = mongoose.model('User', userSchema);
