const express = require('express')
const authRoute = require('./Auth')
const postsRoute = require('./Posts')
const verify = require('../validation/verifyToken')


const router = express.Router()

//API MIDDLEWARE
router.use('/auth', authRoute)
router.use('/posts', verify, postsRoute)

module.exports = router