const express = require('express')
const User = require('../models/User')


const router = express.Router()

router.get('/', (req, res) => {
    res.send("In /auth route")
})

// REGISTER NEW USER
router.post('/register', async (req, res) => {
    try{
        const body = req.body
        const user = new User({
            username: body.username,
            email: body.email,
            password: body.password
        })

        const newUser = await user.save()
        res.status(201).json({newUser})

    } catch (error) {
        res.status(500).json({error})
        throw error
    }
})


module.exports = router