const alunos = [
    { nome: 'João', nota: 7.5, bolsista: false },
    { nome: 'maria', nota: 8.5, bolsista: true },
    { nome: 'Ana', nota: 5.5, bolsista: false },
    { nome: 'pedro', nota: 9.5, bolsista: true },
];

const bolsas = aluno => aluno.bolsista;
const bolsistas = alunos.map(bolsas);
console.log(bolsistas);

//desafio 1 todos são bolsistas?
const todosBolsistas = (acumulador, bolsistas) => acumulador && bolsistas;
const resultadoTodosBolsistas = bolsistas.reduce(todosBolsistas);
console.log(resultadoTodosBolsistas);

//desafio 2 algum é bolsista
const algumBolsista = (acumulador, bolsista) => acumulador || bolsista;
const resultadoAlgumBolsista = bolsistas.reduce(algumBolsista);
console.log(resultadoAlgumBolsista);
