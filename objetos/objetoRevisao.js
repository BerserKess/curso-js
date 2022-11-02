//Objeto é uma coleção dinamica de pares chave/valor
const produt = new Object
produt.nome = 'Cadeiras'
produt['marca do produto'] = 'Generica'
produt.preco = 220

console.log(produt)

const carro = {
    marca: 'Chevrolet',
    modelo: 'Imapala',
    ano: 1967,
    proprietario: {
        nome: 'Dean',
        idade: 39,
        endereco: {
            logradouro: 'Kansas City',
            numero: 66
        }
    },
    condutores: [{
        nome: 'Dean',
        idade: 39,
    },{
        nome: 'Samuel',
        idade: 33
    }],
    calcularValorSeguro: function (){
        //
    }
}

carro.proprietario.endereco.numero = 1000 //se econhecer os atributos é melhor usar essa forma
carro ['proprietario']['endereco']['logradouro'] = 'Heaven Highway, 66'




delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.calcularValorSeguro) // undefined pois foi deletado anteriormente