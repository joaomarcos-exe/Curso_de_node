const http = require('http')
const url = require('url')
const port = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    // if(req.url =='/'){
    //     res.write('<h1>Seja Bem-Vindo</h1>');
    // }else if(req.url == '/canal'){
    //     res.write('<h1>CANAL</h1>')
    // }else if(req.url =='/curso'){
    //     res.write('<h1>CURSOS</h1>')
    // }
    res.write(req.url);
    const p=url.parse(req.url,true).query;
    res.write(`<h1>${p.nome}</h1>`);
    // res.write(p.curso)
    res.end();
})

servidor.listen(port, host, () =>{console.log('Servidor on')});