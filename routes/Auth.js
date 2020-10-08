const express = require('express')


const router = express.Router()

router.get('/', (req, res) => {
    res.send("In /auth route")
})

router.post('/register', (req, res) => {
    res.json("In auth/register")
})


module.exports = router