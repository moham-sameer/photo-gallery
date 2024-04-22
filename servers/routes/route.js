const express = require('express');
const { sendData } = require('../controller/controller.items.js')

const router = express.Router()

router.route('/submitFiles').post(sendData)

module.exports = router;