var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nota1 = parseFloat(lines.shift());
let nota2 = parseFloat(lines.shift());
let nota3 = parseFloat(lines.shift());

const peso1 = 2.0;
const peso2 = 3.0;
const peso3 = 5.0;

let media = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);

console.log("MEDIA = " + media.toFixed(1));