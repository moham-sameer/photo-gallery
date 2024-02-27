const User = require('../model/product')

const getItems = async(req,res)=>{
     const data = await User.find({})
     res.send(data)
     console.log(data)
}
const createItems = async(req,res)=>{
     const data = new User(req.body)
     const result = await data.save();
     res.send(result)
     console.log(result)
}

module.exports = {
    getItems,createItems
}