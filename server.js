const express = require('express')
const mongoose = require('mongoose')

const apiRoute = require('./routes/Api')

require('dotenv').config()


//DB
const DB_NAME = process.env.DB_NAME
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.yttoy.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, 
() => {console.log('connected to database')})


//APP
const app = express()
const PORT = process.env.PORT || 5000

//MIDDLEWARE


// ROUTES
app.get('/', (req, res) => {
    res.send("App has started. Welcome to the home page.")
})

app.use('/api/v1', apiRoute)


app.listen(PORT)