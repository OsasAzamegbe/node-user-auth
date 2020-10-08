const express = require('express')


const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("App has started. Welcome to the home page.")
})


app.listen(PORT)