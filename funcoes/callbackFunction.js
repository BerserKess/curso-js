/**
 * Callback é quando chama uma função depois de algum evento acontecer
 */

const fabricantes = ['Honda', 'Yamaha', 'BMW', 'Suzuki']

function imprimirNome (nome, indice){
    console.log(`${indice + 1} - ${nome}`)
}
fabricantes.forEach(imprimirNome)
fabricantes.forEach(function (marcas){
    console.log(marcas)
})
fabricantes.forEach(marcas => console.log(marcas))