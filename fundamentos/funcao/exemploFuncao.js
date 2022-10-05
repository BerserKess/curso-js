// Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // o segundo item fica como undefined
imprimirSoma(2, 3, 8, 5, 6, 8) // ignora os valores restantes
imprimirSoma() // imprimi um NaN

// Função com retorno

function soma(a, b = 0){
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2))