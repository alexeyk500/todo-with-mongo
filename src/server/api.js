const express = require('express');
const router = express.Router();
const Todo = require('./todo')

router.get('/todos', (req, res)=>{
  res.send({method:'GET'})
});

router.post('/todos', (req, res)=>{
  //res.send({method:'POST'})
  Todo.create(req.body)
    .then(todo=>{
      res.send(todo)
    })
});

router.put('/todos/:id', (req, res)=>{
  res.send({method:'PUT'})
});

router.delete('/todos/:id', (req, res)=>{
  res.send({method:'DELETE'})
});

module.exports = router;
