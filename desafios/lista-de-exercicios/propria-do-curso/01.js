/**
 *  Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
 *  multiplicação e divisão desses valores.
 */

function operacoesAritmeticas (x, y){
    let soma = x + y
    let subtracao = x - y
    let multiplicao = x * y
    let divisao = x / y
    
    return console.log(`A soma é: ${soma}\nA subtração é: ${subtracao}\nA multiplicação é: ${multiplicao}\nE a divisão é: ${divisao.toFixed(2)}`)
}

operacoesAritmeticas(5, 3)
