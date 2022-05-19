const express = require('express');
const app = express();

//Esse parte serve para que possamos para que possamos pegar 
//informações de um formaulario.
app.use(express.urlencoded({extended: true}))

//existem query string que possamos passar que seria https://teste.com/?algo=true

app.get('/', (req, res)=>{
    res.send(
        `<form action="/" method="POST">
        Nome do Cliente:<input type="text" name="nome"/>
        <button>Olá mundo</button>
        </form>`
    )
});
//A interrogação significa que e não e obrigatoio
app.get('/testes/:idUsuarios?', (req, res)=>{
    //Mostrando os params que veio na rota da url
    console.log(req.params);
    //Mostrando as query que veio na querystring na rota
    ///teste/?chave=1$chave2=2
    console.log(req.query);
    res.send(req.params)
})

app.post('/', (req, res)=>{
    //req.body.nome e o que vem no corpo da requisição
    res.send(`Recebi o formulario: ${req.body.nome}` )
});

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
