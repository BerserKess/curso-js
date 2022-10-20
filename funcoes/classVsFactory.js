class Pessoa {
    constructor (nome){
        this.nome = nome //torna o nome publico
    }
    falar (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const novaPessoa = new Pessoa('Kesley')
novaPessoa.falar()

const criarPessoa = nome => {
    return {
        novaFala: () => console.log(`Meu nome é ${nome}`)
    }
}

const novaPessoa2 = criarPessoa('Jainne')
novaPessoa2.novaFala()