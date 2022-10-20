/**
 * Call passa os parametros diretamente na função
 * Apply passa os parametros em um array dentro da função
 */

function getPreco (moeda = 'R$', imposto = 0){
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Moto',
    preco: 4589,
    desconto: 0.15,
    getPreco
}
global.preco = 20
global.desconto = 0.1
 console.log(getPreco())
 console.log(produto.getPreco())

 const produto2 = {
    nome: 'Carro',
    preco: 49990,
    desconto: 0.20
 }

 console.log(getPreco.call(produto2))
 console.log(getPreco.call(produto2, '$', 0.17))
 console.log(getPreco.apply(produto2, ['US$', 0.17]))
 console.log(getPreco.call(produto))
