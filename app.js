const express = require('express')
const todoRoutes= require('./routes/todo')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/v1', todoRoutes)
app.use('/public', express.static(`${__dirname}/storage/imgs`))
module.exports = app