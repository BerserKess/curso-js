const alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'maria', nota: 8.5 },
    { nome: 'Ana', nota: 5.5 },
    { nome: 'pedro', nota: 9.5 },
];

/**
 * Forma imperativa: Se importa mais como é feito
 */
let total = 0;
for (let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota;
}
console.log(total / alunos.length);

/**
 * Forma Declarativa: Se imporata mais com o que deve ser feito
 * melhor forma
 * promove reuso
 */

//
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;

const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);
