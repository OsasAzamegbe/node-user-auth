const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const apiRoute = require('./routes/Api')

require('dotenv').config()


//DB
const DB_NAME = process.env.DB_NAME
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.yttoy.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}, 
() => {console.log(`connected to database.\nState: ${mongoose.connection.readyState}`)})


//APP
const app = express()
const PORT = process.env.PORT || 5000

//MIDDLEWARE
app.use(bodyParser.json())

// ROUTES
app.get('/', (req, res) => {
    res.send("App has started. Welcome to the home page.")
})

app.use('/api/v1', apiRoute)


app.listen(PORT)