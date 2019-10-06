const Todo = require('../models/Todo')

function addTodo (req, res) {
    const { id, description, state, image } = req.body

    Todo.find({id: id}, 'state', function (err, val) {
        if (val.length !== 0) {
            res.status(409).send('Duplicated id value.')
        } else {
            const todo = Todo({
                id,
                description,
                state,
                image
            })
    
            if (req.file) {
                const { filename } = req.file
                todo.setImgUrl(filename)
            }
    
            todo.save((err, saved) => {
                if (err) {
                    res.status(500).send({message: err.message})
                } else {
                    res.status(201).send({ saved })
                }
            })
        }
    })
}

async function getTodos (req, res) {
    let todos;
    const { id, description, state } = req.query
    console.log(id, description, state);
    //If query comes up empty:
    if (Object.keys(req.query).length === 0 && req.query.constructor === Object) {
        todos = await Todo.find().lean().exec()
        res.status(200).send({ todos })
    } else {
        if (!id && !description && !state) {
            res.status(400).send({ error: 'Wrong query param.' })
        } else {
            if (req.query.hasOwnProperty('id')) {
                todos = await Todo.find({id: req.query.id}).lean().exec()
                res.status(200).send({ todos })
            } else if (req.query.hasOwnProperty('description')) {
                let regex = new RegExp(req.query.description, 'i');
                todos = await Todo.find({description: regex}).lean().exec()
                res.status(200).send({ todos })
            } else if (req.query.hasOwnProperty('state')) {
                todos = await Todo.find({state: req.query.state}).lean().exec()
                res.status(200).send({ todos })
            } else {
                res.status(400).send({ error: 'Wrong query param.' })
            }
        }
    }
}

function updateTodo (req, res) {
    const { dbId } = req.body
    Todo.find({_id: dbId}, 'state', function (err, val) {
        if (err) {
            return res.status(404).send({ err })
        }
        Todo.update({_id: dbId},
            {'$set': {'state': !val[0].state,}}, (err,model) => {
                if (err) {
                    returnres.status(404).send({ err })
                }
              return res.status(202).send({ model })
          });
    })
}

module.exports = {
    addTodo,
    getTodos,
    updateTodo
}