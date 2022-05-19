const express = require('express');
const routes = require('./routes');
const portas = process.env.PORT || 3000;

const app = express();

app.use('/', routes);

app.get('*', (req, res) =>{
    res.send('Cursos cfb')
})

app.listen(portas, ()=>{console.log('server on')})