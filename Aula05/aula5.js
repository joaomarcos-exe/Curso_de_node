const http = require('http');
const fs = require('fs')
//Module fs serve para que possamos ler arquivos 

const porta = process.env.PORT

const server=http.createServer((req, res) =>{
    fs.readFile('index.html', (err, arr) =>{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(arr)
        return res.end()
    })
})

server.listen(porta || 3000, () => console.log('Servidor on'))