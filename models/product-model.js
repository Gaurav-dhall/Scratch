const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    image: String,
name:{
    type: String,
    minLength: 3,
    maxLength: 50,
    trim: true,
},
price: Number,
discount: {
    type: Number,
    default: 0
},
bgColor: String,
panelColor: String,
textColor: String,    

});
module.exports = mongoose.model('Product', productSchema);
