/**
 * Crie uma função que irá receber dois valores, o dividendo e o divisor.
 * A função deverá imprimir o resultado e o resto da divisão destes dois valores.
 */

const divisores = (dividendo, divisor) => {
    let divisao = dividendo / divisor
    let resto = dividendo % divisor


    return console.log(`${dividendo} dividido por ${divisor} é igual a: ${divisao.toFixed(2)} e o resto da divisão é: ${resto}`)
}

divisores (60,3)