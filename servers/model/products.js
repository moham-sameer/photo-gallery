const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    phonenumber:Number,
    email:String,
    nazrana:String,
    address:String,
})

const Items = mongoose.model('product',productSchema)
module.exports = Items;