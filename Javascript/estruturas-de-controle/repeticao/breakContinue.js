const numeros = [1, 2, 3, 4, 5, 6, 7, 8,9, 10]

for (let x in numeros){
    if (x == 5){
        break // Faz um desvio de fluxo para fora do laço corrente
    }
    console.log(`${x}: ${numeros[x]}`)
}

for (let y in numeros){
    if (y == 5){
        continue // Faz um desvio de fluxo para proxima repetição corrente dentro do mesmo laço
    }
    console.log(`${y}: ${numeros[y]}`)
}