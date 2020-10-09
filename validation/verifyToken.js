const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    try{
        const token = req.header("Authorization")
        const verified = jwt.verify(token, process.env.JWT_TOKEN_SECRET)
        req.user = verified
        next()
    } catch (err) {
        res.status(401).json({"error": "Access Denied"})
    }
    
}

module.exports = verifyToken