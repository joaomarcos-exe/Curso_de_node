const multiplicacao = require('./mod');

console.log(multiplicacao(2, 4))

//São duas variaveis internas do modulo onde mostra o nome
//do arquivo e o outro mostra o arquivo.
console.log(__filename);
console.log(__dirname);

//Se eu usar o patch ele ira criar um caminho ou achar um caminho
//e uso o patch quando não sei onde meu programa ira rodar.
const path = require('path')

console.log(path.resolve(__dirname))
