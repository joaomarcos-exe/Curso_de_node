const express = require('express');
const routes = express.Router();

let cursosInfo = [
    {
    'curso': 'node', 'info': 'Curso de node'
    },
    {
        'curso': 'react', 'info': 'Curso de node'
    },
    {
        'curso': 'Java', 'info': 'Curso de node'
    }
]
//Rota raiz
routes.get('/', (req, res) =>{
    res.json({ola: 'Seja bem vindo'})
})

routes.get('/:cursoid', (req, res) =>{
    const curso = req.params.cursoid
    const cursoI = cursosInfo.find(i => i.curso == curso) 

    if(!cursoI){
        res.status(404).json(
            {erro: 'Curso não encontrado.'}
        )
    }else{
        res.status(200).json(cursoI)
    }
})

module.exports = routes;

