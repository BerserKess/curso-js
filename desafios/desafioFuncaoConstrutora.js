/*class Pessoa {
    constructor (nome){
        this.nome = nome //torna o nome publico
    }
    falar (){
        console.log(`Meu nome é ${this.nome}`)
    }
}*/

//const novaPessoa = new Pessoa('Kesley')
//novaPessoa.falar()

function Pessoa (nome) {
    this.nome = nome

    this.falar = () => console.log(`Meu nome é ${this.nome}`)
}
const pessoa = new Pessoa('Kesley')
pessoa.falar()