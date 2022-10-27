/**
 * Um funcionário irá receber um aumento de acordo com o seu plano de
 * trabalho, de acordo com a tabela abaixo: 
 * A - 10%
 * B - 15%
 * C - 20 %
 * Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime
 * o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. 
 */

const receberAumento = (planoDeTrabalho, salarioAtual = getSalario()) => {
    function getSalario (salario) {
        return salario
    }
    switch(planoDeTrabalho){
        case 'A':
            console.log(`Seu novo salário é de : ${salarioAtual + (salarioAtual * 0.10)}`)
            break
        case 'B':
            console.log(`Seu novo salário é de : ${salarioAtual + (salarioAtual * 0.15)}`)
            break
        case 'C':
            console.log(`Seu novo salário é de : ${salarioAtual + (salarioAtual * 0.20)}`)
            break
        default:
            console.log('Plano inválido!!')
    }
}

receberAumento('A', 1200)
receberAumento('B', 1200)
receberAumento('C', 1200)
receberAumento('D', 1200)