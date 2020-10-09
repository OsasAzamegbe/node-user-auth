const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 200
    },
    email: {
        type: String,
        required: true,
        max: 200,
        index: {
            unique: true
        },
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 2048
    }, 
    date: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('Users', userSchema)

module.exports = User