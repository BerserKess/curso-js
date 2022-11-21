Array.prototype.map2 = function (callback) {
    const newArray = [];
    for (let x = 0; x < this.length; x++) {
        newArray.push(callback(this[x], x, this));
    }
    return newArray;
};

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Laps", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
];

const converterEmObjeto = json => JSON.parse(json);
const getPrecos = produto => produto.preco;

const precoProduto = carrinho.map2(converterEmObjeto).map2(getPrecos);
console.log(precoProduto);
