const imprimirResultado = function(nota){
    if (nota >= 7){
        console.log('Aprovado');
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Êpa') // cuidado!! verificar se o valor é numerico nesse caso