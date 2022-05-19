const nome = 'joao';
const sobrenome = 'pimenta'

const falaNome = () => `${nome} ${sobrenome}`

//Forma normal de fazer
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// console.log(module.exports);

//forma reduzida
//O exports e um valor por referencia para module.exports
//Neste contexto a palavra this aponta para exports e module.exports
//A variavel não precisa ter o nome da chave como por exemplo
//exports.NOME = nome;
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquercoisa = 'O que eu quiser';
//normalmente não se usa o this

// console.log(exports)

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

//Tambem posso sobreescrever objetos
//Não possa fazer isso só com o exports
module.exports
 = {
     nome, sobrenome, Pessoa
 }
