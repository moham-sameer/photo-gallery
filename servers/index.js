const express = require('express')
const app = express()
const cors = require('cors')
require('./db/connect.js')
const userRouter = require('./routes/route.js')
app.use(express.json())
app.use(cors())
app.use('/',userRouter)


app.listen(3000,console.log('server is listening on port 3000...'))