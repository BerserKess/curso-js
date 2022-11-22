Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim; // retorna o verdadeiro se o valor estiver entre o inicio e o fim
}

const imprimirResultado = function (nota){
    if(nota.entre(9, 10)){
        console.log('Parabéns, ótima nota');
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado');
    } else if (nota.entre(5, 6.99)){
        console.log('Prova Final');
    } else if (nota.entre(0, 4.99)){
        console.log('Reprovado');
    } else{
        console.log('Nota Invalida');
    }
}

imprimirResultado(9.5);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(3.2);
imprimirResultado(-1);
imprimirResultado(11);