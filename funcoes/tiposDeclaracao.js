console.log(soma(4,4)) // na forma de declaração a função pode ser chamada antes e depois do escopo dela no código

// delcaração de função
function soma (x,y){
    return x + y
}

// expressão de função (armazena uma função anonima em uma const, let)
const subtracao = function(x,y){
    return x - y
}
console.log(subtracao(3,7)) // na expressão não

// expressão de função nomeada
const multiplicao = function multiplicao(x,y){
    return x * y
}