const Product = require('../model/product')
const bcryptjs = require('bcryptjs')
const errorHandler = require('../utils/error')
const jwt = require('jsonwebtoken')
const signUp =async(req,res,next)=> {
    try {   
        const {username,email,password} = req.body
        const hashedPassword = bcryptjs.hashSync(password,10);
        const newUser = new Product({username,email,password:hashedPassword})
        const result = await newUser.save()
        res.send(result)
        console.log(result);
    } catch (error) {
         next(error)
    }
}
const signIn = async(req,res,next)=>{
    try {
      const {email,password} = req.body;
        const validUser = await Product.findOne({email});
        if(!validUser) return next(errorHandler(404,"user not found"))
        const validPassword = bcryptjs.compareSync(password,validUser.password)
        if(!validPassword) return next(errorHandler(401,"wrong credentials"))
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
         const {password:clearing,...rest} = validUser._doc;
        res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest)
    } catch (error) {
       next(error) 
    }
}
module.exports = {signUp,signIn}