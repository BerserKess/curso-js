/*
 * Todos os números positivos são verdadeiros, com execeção do zero
 *
 * 
*/


let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // nesse caso o ! vai testar se é verdadeiro ou falso.

console.log('O que é verdadeiro...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('O que é falso...')
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN); 
console.log(!!undefined);
console.log(!!(isAtivo = false)); // se a expressão retornar falso vai ser false
