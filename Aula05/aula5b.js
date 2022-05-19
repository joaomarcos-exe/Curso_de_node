const http = require('http');
const fs = require('fs')
//Module fs serve para que possamos ler, criar e abrir arquivos

const porta = process.env.PORT

const server=http.createServer((req, res) =>{
    fs.appendFile('teste.text', 'CURSO DE NODE', (err, arr) =>{
        if(err)throw err
        console.log('Arquivo Criado')
        res.end()
    })
})

server.listen(porta || 3000, () => console.log('Servidor on'))