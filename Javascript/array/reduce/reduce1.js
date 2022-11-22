/**
 * Reduce realiza uma operação nos itens de um array e ao final retorna um resultado
 * agreaga os valores em um só
 */

const alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'maria', nota: 8.5 },
    { nome: 'Ana', nota: 5.5 },
    { nome: 'pedro', nota: 9.5 },
];

const notasDosAlunos = aluno => aluno.nota;
const resultado = alunos.map(notasDosAlunos).reduce(
    function (acumulador, valorAtual) {
        //se nenhum valor inicial for passado ele pega os primeiros indices do array e soma
        console.log(acumulador, valorAtual);
        return acumulador + valorAtual;
    } /*valor inicial fica aqu0*/,
);

console.log(resultado);
