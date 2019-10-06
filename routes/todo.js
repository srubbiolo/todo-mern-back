const express = require('express')
const { addTodo, getTodos, updateTodo } = require('../controllers/todoController')
const api = express.Router()
const upload = require('../libs/storage')

api.post('/todos', upload.single('image'), addTodo)
api.get('/todos', getTodos)
api.put('/todos', updateTodo)
module.exports = api