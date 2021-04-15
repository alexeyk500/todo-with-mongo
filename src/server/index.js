const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://127.0.0.1:27017/myapp', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./api'));

app.listen(4000, ()=>{
  console.log('server is listening')
})
