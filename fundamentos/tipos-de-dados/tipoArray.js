/**
 * Em JS array é do tipo Object
 */

const valoresArray = [7.7, 8.9, 6.3, 9.2];
console.log(valoresArray[0], valoresArray[3]);
console.log(valoresArray[4]);

valoresArray[4] = 10;
console.log(valoresArray);
console.log(valoresArray.length) // tamanho do array
valoresArray.push({id: 3}, false, null, 'teste') // adiciona valores a um array
console.log(valoresArray); 

console.log(valoresArray.pop()); // retira o ultimo valor do array
console.log(typeof valoresArray);