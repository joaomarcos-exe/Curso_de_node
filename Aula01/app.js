//Para modulos que instalamos via node module não precisamos do caminho 
//por exemplo o axios 
const axios = require('axios')



//Como om module em um objeto tambem possa fazer por desestruturação
const {Pessoa} = require('./mod1')
// console.log(nome);
// console.log(sobrenome)
// console.log(falaNome())

const p1 = new Pessoa('Joao')
console.log(p1)


// const mod1 = require('./mod1');

//Existem varias formas de importar o modulo como feito abaixo
// const mod1 = require('./mod1').falaNome;
// console.log(mod1)

// console.log(mod1);
// console.log(mod1.falaNome())




