/**
 *  Faça um algoritmo que calcule o fatorial de um número
 */
const multiplos = []
let resultado = 1
 const getRamdon = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
 const fatorial = (numero) => {
    let fator = getRamdon(11,1)
    numero = fator
    // gera uma lista para fatorial do numero
    for (let i = 1; i <= numero; i++){
        multiplos.push(i) 
        multiplos.sort((a,b) => {
            if (a > b) return -1
            if(a < b) return 1
            return 0
        })  
    }
    // realiza a fatoração do numero
    const multiplicarPeloFator = (indice) => {       
        for (indice of multiplos){
            resultado *= indice 
        }
        console.log(resultado)
    }

    console.log(fator)
    console.log(multiplos)
    multiplicarPeloFator()
}
fatorial(7)