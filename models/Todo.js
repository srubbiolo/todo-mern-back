const mongoose = require('mongoose')
const { appConfig } = require('../config')
const Schema = mongoose.Schema
//table is a collection in mongo
const TodoSchema = Schema({
    id: Number,
    description: String,
    state: Boolean,
    imgUrl: String
}, {
    timestamps: true
})

TodoSchema.methods.setImgUrl = function setImgUrl (filename) {
    const { host, port } = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Todos', TodoSchema)