const joi = require('@hapi/joi')


// REGISTER VALIDATION
const registerValidation = (body) => {
    const schema = joi.object({
        username: joi.string().max(200).required(),
        email: joi.string().max(200).required().email(),
        password: joi.string().max(2048).min(8).required(),
    })

    return schema.validate(body)
}

// LOGIN VALIDATION
const loginValidation = (body) => {
    const schema = joi.object({
        email: joi.string().max(200).required().email(),
        password: joi.string().max(2048).min(8).required(),
    })

    return schema.validate(body)
}

module.exports = {registerValidation, loginValidation}