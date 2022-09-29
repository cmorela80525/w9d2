//Require
const express = require("express");
const app = express();
require("dotenv").config();


const mongoose = require('mongoose')
const Log = require('./models/Log.js')
const methodOverride = require('method-override')

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

app.use(methodOverride('_method'))


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

//Delete
app.delete('/logs/:id', (req, res) => {
    Log.deleteOne({ _id: req.params.id }, (error, data) => {
        res.redirect('/logs')
    })
})

//Update
app.put('/logs/:id', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
      } else {
        req.body.readyToEat = false;
      }
      Log.updateOne({_id: req.params.id}, req.body)
      res.redirect('/logs/')
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

//Edit
app.get('/logs/:id/edit', (req, res) => {
    Log.findOne({ _id: req.params.id }, (error, foundLog) => {
        if (error) {
            res.json({error: error})
        } else {
            res.render('Edit', {
                log: foundLog
            })
        }
    })
})

//Show
app.get('/logs/:id', (req, res) => {
    Log.findOne({ _id: req.params.id }, (error, foundLog) => {
        res.render("Show", {
            log: foundLog
        })
    })
})

const PORT = process.env.PORT  //grabs the PORT variable from the .env file
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})