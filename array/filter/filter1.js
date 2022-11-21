/**
 * filter serve para filtrar um array e gerar um novo com as condições estabelecidas
 */

const produtos = [
    { nome: 'mesa', valor: 599, fragil: false },
    { nome: 'computador', valor: 1600, fragil: true },
    { nome: 'celular', valor: 1200, fragil: true },
    { nome: 'cadeira', valor: 850, fragil: true },
];

console.log(produtos);
console.log(
    produtos.filter(function (produtos) {
        return produtos.valor > 1000;
    }),
);

const maisCaros = produtoCaro => produtoCaro.valor > 800;
const fragil = produtoFragil => produtoFragil.fragil;
console.log(produtos.filter(maisCaros).filter(fragil));
