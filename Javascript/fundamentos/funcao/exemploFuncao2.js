// Armazenar uma função em variavel

const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma (2, 3);

// Armazenando uma função arror em uma variavel
const soma = (a, b) =>{
    return a + b;
}

console.log(soma(3, 5));

// retorno implicito na função arrow
const subtracao = (c, d) => c - d;
console.log(subtracao(4, 8));