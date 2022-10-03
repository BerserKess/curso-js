const nome = 'Kesley';
const concatenacao = 'Olá ' + nome + '!';
const template = `
Olá
${nome}!`;

console.log(concatenacao, template)

//também usado em expressões
console.log(`1 + 1 = ${1 + 1}`);
// e funções
const maiuscula = texto => texto.toUpperCase();
console.log(`Ei...${maiuscula('cuidado')}!!`)