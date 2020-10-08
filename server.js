const express = require('express')
const apiRoute = require('./routes/Api')


const app = express()
const PORT = process.env.PORT || 5000

//MIDDLEWARE


// ROUTES
app.get('/', (req, res) => {
    res.send("App has started. Welcome to the home page.")
})

app.use('/api/v1', apiRoute)


app.listen(PORT)