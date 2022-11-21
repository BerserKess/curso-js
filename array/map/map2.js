const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Laps", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
];

const converterEmObjeto = json => JSON.parse(json);
const getPrecos = produto => produto.preco;

const precoProduto = carrinho.map(converterEmObjeto).map(getPrecos);
console.log(precoProduto);
