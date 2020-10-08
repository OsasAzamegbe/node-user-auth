const express = require('express')
const authRoute = require('./Auth')


const router = express.Router()

//API MIDDLEWARE
router.use('/auth', authRoute)

module.exports = router