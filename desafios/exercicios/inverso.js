function retornarInverso(valor) {
    if (typeof valor === 'number') {
        console.log(-valor);
    } else if (typeof valor === 'boolean') {
        console.log(!valor);
    } else {
        console.log(
            'booleano ou números esperado, mas o valor é do tipo string',
        );
    }
}

retornarInverso(500);
