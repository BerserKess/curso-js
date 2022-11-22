const personagens = ['Arthas', 'Uther', 'Jainna', 'Muradin', 'Kelthuzad'];
console.log(personagens);
personagens.pop(); // remove o ultimo elemento da lista
console.log(personagens);

personagens.push('Magni'); // adiciona elemento no ultimo inidice
console.log(personagens);

personagens.shift(); // remove o primeiro elemento da lista
console.log(personagens);

personagens.unshift('Lich King'); // adiciona no primeiro indice
console.log(personagens);

// splice pode adicionar, remover ou adicionar e remover

// adicionar
personagens.splice(3, 0, 'Terenas', 'Tyrion');
console.log(personagens);

//remover
personagens.splice(3, 1);
console.log(personagens);

// remover e adicionar
personagens.splice(5, 1, 'Bolvar');
console.log(personagens);

const algunsPersonagens = personagens.slice(3); // retorna um novo array com parte do array selecionado
console.log(algunsPersonagens);

const outrosPersonagens = personagens.slice(1, 4);
console.log(outrosPersonagens);
