/**
 * Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
 * a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item.
 * Use o comando switch. Crie um caso default para produto não existente.
 */

const pedido = (codigo, quantidade) => {
    switch (codigo){
        case 100:
            console.log(`${quantidade} Cachorro quente, valor total é de: R$ ${(quantidade * 3.00).toFixed(2)}`)
            break
        case 200:
            console.log(`${quantidade} Hambuerguer simples, valor total é de: R$ ${(quantidade * 4.00).toFixed(2)}`)
            break
        case 300:
            console.log(`${quantidade} Cheeseburguer, valor total é de: R$ ${(quantidade * 5.50).toFixed(2)}`)
            break
        case 400:
            console.log(`${quantidade} Bauru, valor total é de: R$ ${(quantidade * 7.50).toFixed(2)}`)
            break
        case 500:
            console.log(`${quantidade} Refrigerante, valor total é de: R$ ${(quantidade * 3.50).toFixed(2)}`)
            break
        case 600:
            console.log(`${quantidade} Suco, valor total é de: R$ ${(quantidade * 2.80).toFixed(2)}`)
            break
        default:
            console.log('Produto não existente')
    }
}

pedido(300, 3)