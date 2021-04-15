const express = require('express');
const router = express.Router();
const Todos = require('./todoModel');


router.get('/todos', (req, res)=>{
  Todos.find({})
    .then(todos=>{res.send(todos)})
});

router.post('/todos', (req, res)=>{
  todos.create(req.body)
    .then(todo=>{
      res.send(todo)
    })
});

router.put('/todos/:id', (req, res)=>{
  Todos.findOneAndUpdate({id: req.params.id}, req.body)
    .then(()=>{
      Todos.findOne({id: req.params.id})
        .then( (todo)=>{res.send(todo)} )
    })
});

router.delete('/todos/:id', (req, res)=>{
  Todos.deleteOne({id: req.params.id})
    .then((result)=>{
      res.send(result)
    })
});

module.exports = router;
