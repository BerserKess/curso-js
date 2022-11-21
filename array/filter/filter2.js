Array.prototype.filter2 = function (callback) {
    const newArray = [];
    for (let x = 0; x < this.length; x++) {
        if (callback(this[x], x, this)) {
            newArray.push(this[x]);
        }
    }
    return newArray;
};

const produtos = [
    { nome: 'mesa', valor: 599, fragil: false },
    { nome: 'computador', valor: 1600, fragil: true },
    { nome: 'celular', valor: 1200, fragil: true },
    { nome: 'cadeira', valor: 850, fragil: true },
];

const maisCaros = produtoCaro => produtoCaro.valor > 800;
const fragil = produtoFragil => produtoFragil.fragil;
console.log(produtos.filter2(maisCaros).filter2(fragil));
