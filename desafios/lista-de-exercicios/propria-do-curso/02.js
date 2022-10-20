/**
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação
 * quanto ao tamanho de seus lados.
 */

function triangulo (lado1, lado2, lado3){
    if (lado1 == lado2 || lado1 == lado3){
        if (lado1 == lado2 && lado1 == lado3){
            console.log('Equilátero')
        } else{
            console.log('Isósceles')
        }
    } else if (lado2 == lado1 || lado2 == lado3){
        if (lado2 == lado1 && lado2 == lado3){
            console.log('Equilátero')
        } else{
            console.log('Isósceles')
        }
    } else if (lado3 == lado1 || lado3 == lado2){
        if (lado3 == lado1 && lado3 == lado2){
            console.log('Equilátero')
        } else{
            console.log('Isósceles')
        }
    } else {
        console.log('Escaleno')
    }
}

triangulo(6,7,8)