const soma = function(x,y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(5,5)
imprimirResultado(3,4)
imprimirResultado(2,3,function(x,y){
    return x - y
})
imprimirResultado(3,4, (x,y) => x * y) // não tem como dar nome a uma funcao arrow

const pessoa = {
    falar: function (){
        console.log('Diz')
    }
}

pessoa.falar()