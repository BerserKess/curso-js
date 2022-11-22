var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nota1 = parseFloat(lines.shift());
let nota2 = parseFloat(lines.shift());

const peso1 = 3.5;
const peso2 = 7.5;

let media = ((nota1 * peso1) + (nota2 * peso2)) / (peso1 + peso2);

console.log("MEDIA = " + media.toFixed(5));