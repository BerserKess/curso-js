function soma() {
    let soma = 0
    // vai somar todos os elementos do array
    for (i in arguments){ // um array que contem os argumentos da função
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(5,8,3,4,7,5))
console.log(soma('a','b','c'))