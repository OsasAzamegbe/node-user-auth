const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const {registerValidation, loginValidation} = require('../validation/Validation')



const router = express.Router()

router.get('/', (req, res) => {
    res.send("In /auth route")
})

// REGISTER ROUTE
router.post('/register', async (req, res) => {

    const body = req.body

    //validation
    const {error} = registerValidation(body)
    if (error) {
        return res.status(400).json({"validation error" : error.details[0].message})
    }

    //check if email is unique
    const emailExists = await User.findOne({email: body.email})
    if(emailExists){
        return res.status(400).json({"error": "An account with this email address already exists."})
    }

    try{
        //encrypt password
        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(body.password, salt)

        const user = new User({
            username: body.username,
            email: body.email,
            password: encryptedPassword
        })

        const newUser = await user.save()
        res.status(201).json({
            userCreated: true,
            newUserId: newUser._id
        })

    } catch (error) {
        res.status(500).json({error})
        throw error
    }
})



//LOGIN ROUTE
router.post('/login', async (req, res) => {
    const body = req.body

    //Validate Login data
    const {error} = loginValidation(body)
    if (error) {
        return res.status(400).json({"validation error" : error.details[0].message})
    }

    const user = await User.findOne({email: body.email})

    if (!user) {
        return res.status(400).json({error: "Email or Password is incorrect"})
    }

    //compare passwords
    const validPassword = await bcrypt.compare(body.password, user.password)
    if (!validPassword) {
        return res.status(400).json({error: "Email or Password is incorrect"})
    }

    return res.status(200).json({message: "Logged in succesfully"})

})


module.exports = router