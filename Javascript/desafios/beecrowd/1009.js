var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = String(lines.shift());
let salarioFixo = parseFloat(lines.shift());
let totalVendasDoMes = parseFloat(lines.shift());
const comissao = 0.15;

let salarioFimDoMes = salarioFixo + (totalVendasDoMes * comissao);

console.log('TOTAL = R$ ' + salarioFimDoMes.toFixed(2));