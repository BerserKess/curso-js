// implementa a função no prototype de array

Array.prototype.forEach2 = function (callback) {
    // chama uma função callback
    for (let x = 0; x < this.length; x++) {
        callback(this[x], x, this); // retorna o elemento, o indice e o array
    }
};

const nomes = ['João', 'Pedro', 'Otavio'];

nomes.forEach2((nome, indice) => console.log(`${indice + 1}) ${nome}`));
