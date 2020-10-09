const express = require('express')
const User = require('../models/User')
const {registerValidation} = require('../validation/Validation')


const router = express.Router()

router.get('/', (req, res) => {
    res.send("In /auth route")
})

// REGISTER NEW USER
router.post('/register', async (req, res) => {

    const body = req.body

    //validation
    const {error} = registerValidation(body)
    if (error) {
        return res.status(400).json({"validation error" : error.details[0].message})
    }

    //check if email is unique
    const emailExists = User.findOne({email: body.email})
    if(emailExists){
        return res.status(400).json({"error": "An account with this email address already exists."})
    }

    try{
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