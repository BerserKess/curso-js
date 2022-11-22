/**
 * Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */
 const listaDeInteiros = []
 
 const getRamdon = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for(let x = 0; x <= 10; x++){
    listaDeInteiros.push(getRamdon(30,1))
}
let maiorValor = listaDeInteiros.reduce(function(a,b){
    return Math.max(a,b)
})
 let menorValor = listaDeInteiros.reduce(function(a,b){
    return Math.min(a,b)
})

console.log(`A lista: ${listaDeInteiros}\nO maior: ${maiorValor}\nO menor: ${menorValor}`)