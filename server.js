//Require
const express = require("express");
const app = express();
require("dotenv").config();


const mongoose = require('mongoose')
const Log = require('./models/Log.js')
// const methodOverride = requrie('method-override')

//------------------------------------
//Mongoose Connection Stuff
//------------------------------------

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log('connected to mongo') //logs when mongo connection connects
})

//Setting Up View Engine - to use express-react-views

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//------------------------------------
//Setting Up Body Parser - so we can read json
//------------------------------------

app.use(express.urlencoded({extended:false}))

//------------------------------------
//Method Override - so we can override post request to make a delete or update request
//------------------------------------

// app.use(methodOverride('_method'))


//ROUTES

//Index
app.get('/logs', (req, res) => {
    Log.find({}, (error, allLogs) => {
        res.render('Index', {
            logs: allLogs
        })
    })
   
})

//New
app.get('/logs/new', (req, res) => {
    res.render('New')
})

//Create
app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    Log.create(req.body)
    res.redirect('/logs')
})


//Show
app.get('/logs/:id', (req, res) => {
    Log.findOne({ _id: req.params.id }, (error, foundLog) => {
        res.render("logs/Show", {
            log: foundLog
        })
    })
})

const PORT = process.env.PORT  //grabs the PORT variable from the .env file
app.listen(3000, () => {
    console.log(`listening on port ${PORT}`)
})