const express = require('express')
const authRoute = require('./Auth')
const postsRoute = require('./Posts')


const router = express.Router()

//API MIDDLEWARE
router.use('/auth', authRoute)
router.use('/posts', postsRoute)

module.exports = router