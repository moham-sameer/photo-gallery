const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"must provide username"],
        trim:true,
        unique:true,
        maxLength:[40,"name can not be more than 40 character "]
    },
    email:{
        type:String,
        required:[true,"must provide username"],
        trim:true,
        unique:true,
        maxLength:[40,"name can not be more than 40 character "]
    },
    password:{
        type:String,
        required:[true,"must provide username"],
    }
})
module.exports = mongoose.model('auth',productSchema)
