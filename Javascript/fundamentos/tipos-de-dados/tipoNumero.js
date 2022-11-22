const peso = 1.0;
const peso2 = Number('2.0'); // retorna um valor númerico

console.log(peso);
console.log(Number.isInteger(peso));
console.log(Number.isInteger(peso2)); // verifica se é inteiro

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = (avaliacao1 * peso) + (avaliacao2 * peso2);
const media = total / (peso + peso2);

console.log(media.toFixed(2));
console.log(media.toString(2)) //retorna o valor em binário
console.log(typeof media);
console.log(typeof Number);