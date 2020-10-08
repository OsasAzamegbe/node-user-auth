const express = require('express')
const authRoute = require('./routes/Auth')


const app = express()
const PORT = process.env.PORT || 5000

//MIDDLEWARE
app.use('/auth', authRoute)

// ROUTES
app.get('/', (req, res) => {
    res.send("App has started. Welcome to the home page.")
})


app.listen(PORT)