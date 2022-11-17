/**
 * Array em Js é um objeto
 */

let inteiros = new Array(1, 2, 3, 4); // forma não convencional de criar um array
inteiros = [1, 2, 3, 54]; // forma literal

inteiros[3] = 4; // forma de adicionar ou alterar o indice do array
inteiros.push(5); // adicionar um elemento no ultimo indice do array
console.log(inteiros);

inteiros[6] = 6; // adiciona um elemento no indice 6 e os outros que não foram definidos ficam como undefined
console.log(inteiros);

inteiros.sort(); // altera o array e ordena ele
console.log(inteiros);

delete inteiros[6];
console.log(inteiros);

inteiros = [1, 2, 3];
inteiros.splice(1, 1); // serve para adicionar, remover ou adicionar e remover elementos
console.log(inteiros);
