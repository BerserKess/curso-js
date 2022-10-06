const pessoa = {
    nome : 'Kesley',
    idade: 30,
    endereco: {
        logradouro: 'Rua Imoral',
        numero: 150
    } 
}

const {nome, idade} = pessoa // tire de dentro do objeto pessoa os atributos nome e idade
console.log(nome, idade);

// tira os atributos e coloca em variaveis
const {nome: name, idade: age} = pessoa;
console.log(name, age);


const {sobrenome, bemHumorado = false} = pessoa
console.log(sobrenome, bemHumorado);

// acessar atributos de um objeto dentro de outro objeto
const {endereco: {logradouro, numero}} = pessoa;
console.log(logradouro, numero);

