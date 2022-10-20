const notas = [7.8, 6.5, 8.5, 3.6, 5.3, 7.1, 9.0]
// retornar um array só com notas menores que 7
// sem callback

let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// com callback
// filter vai retornar true or false para cada indice do array

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

const notasMenoresQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenoresQue7)
console.log(notasBaixas3)

