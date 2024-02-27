const express = require('express')
const { getItems, createItems } = require('../controller/auth')
const router = express.Router()

router.get('/getitems',getItems).post('/createitems',createItems)
module.exports = router