
const Items = require('../model/products.js')

const sendData = async(req,res)=>{
    try {
        
        const data = new Items({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            phonenumber:req.body.phonenumber,
            email:req.body.email,
            nazrana:req.body.nazrana,
            address:req.body.address,
        })
        const result = await data.save()
        res.send(result)
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
}

module.exports = {
    sendData
}