var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pecaUm = lines.shift().split(' ');
let pecaDois = lines.shift().split(' ');

let codigoPecaUm = parseInt(pecaUm[0]);
let numeroDePecasUm = parseInt(pecaUm[1]);
let valorPecaUm = parseFloat(pecaUm[2]);

let codigoPecaDois = parseInt(pecaDois[0]);
let numeroDePecasDois = parseInt(pecaDois[1]);
let valorPecaDois = parseFloat(pecaDois[2]);

let valorTotal = (numeroDePecasUm * valorPecaUm) + (numeroDePecasDois * valorPecaDois);
console.log('VALOR A PAGAR: R$ ' + valorTotal.toFixed(2))
