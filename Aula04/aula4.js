// const http=require('http');
const express = require('express');
const app = express();
const porta=process.env.PORT

const servidor =http.createServer((req, res) =>{
    res.statusCode=200;
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Curso de node');
})

servidor.listen(porta || 3000, () => {console.log('Servidor rodando')})