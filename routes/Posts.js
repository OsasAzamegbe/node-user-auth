const express = require('express')
const router = express.Router()


router.get('/', (req, res) =>{
    res.json({"posts": [
        {
            title: "index post",
            content: "lorem ipsum and some stuff you shouldn't access"
        }
    ]})
})


module.exports = router