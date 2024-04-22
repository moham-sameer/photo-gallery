const express = require('express')
const app = express()
const cors = require('cors')
require('./db/connect.js')
const userRouter = require('./routes/route.js')
app.use(cors(
   {
  origin:'https://mern-form-client.vercel.app',
  methods: ['POST', 'GET'],
  credentials: true
}
));
app.use(express.json())
app.use('/',userRouter)


app.listen(3000,console.log('server is listening on port 3000...'))
