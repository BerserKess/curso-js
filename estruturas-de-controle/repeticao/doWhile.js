function pegarNumeroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let numero
do {
    numero = pegarNumeroAleatorio(-1, 10)
    console.log(`Numero sorteado foi: ${numero}`)
} while (numero != -1)

console.log('Valeu!')