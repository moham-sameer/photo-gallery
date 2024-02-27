const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/route')
const authRouter = require('./routes/auth.route')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
dotenv.config()
require('./db/connect')
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/',authRouter)
app.use('/',userRouter)

app.use((error,req,res,next)=>{

    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
 })
const port = 4444;
app.listen(port,console.log(`Server is listening on port ${port}...`))