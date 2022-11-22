/**
 * Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

const listaNumerica = []
let par = 0
let impar = 0
for (let x = 0; x <= 9; x++){
    listaNumerica.push(x)
    if (Number(listaNumerica[x]) % 2 == 0){
        par++
    } else {
        impar++
    }
}

console.log(`Pares: ${par}; Impares: ${impar}`)