/**
 * Foreach recebe uma função callback que percorre o array e
 * retorna o elemento e o indice
 */

const nomes = ['João', 'Pedro', 'Otavio'];
nomes.forEach((nome, indice) => {
    console.log(`${indice + 1}) ${nome}`);
});

// ou apenas o elemento
nomes.forEach(nome => console.log(nome));

// ou elemento, indice e o array
nomes.forEach((nome, indice, array) => {
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
});

const exibirNomes = nome => console.log(nome);
nomes.forEach(exibirNomes);
