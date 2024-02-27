const express = require('express');
const { signIn, signUp } = require('../controller/authen');
const router = express.Router()

router.route('/auth/signin').post(signIn)
router.route('/auth/signup').post(signUp)

module.exports = router
