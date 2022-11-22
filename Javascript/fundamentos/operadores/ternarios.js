/**
 * Estrutura do Operador ternário
 * espressão relacional > ou <
 * ? (sinal de interrogação)
 * se for verdadeiro retorna tal valor
 * se não retorna outro valor
 */
const resultado = nota => nota>= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(7.1));
console.log(resultado(6.7));