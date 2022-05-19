// const http=require('http');
const express = require('express');
const app = express();
const porta=process.env.PORT

app.get('/', (req, res) =>{
    res.send('Bem-Vindo')
})

app.get('/canal', (req, res) =>{
    res.json({canal: 'Curso de node'})
})


app.listen(porta || 3000, () => {console.log('Servidor rodando')})