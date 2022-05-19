const express = require('express');
const app = express();

//crud Create Read Updade Delete 
//     POST GET PUT DELETE

app.get('/', (req, res) => {
    //req e a requisição e referemte ao que estou pedindo
    //res e a resposta do servidor
    res.send('Hello world!');
});

app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato')
})

app.listen(3000);