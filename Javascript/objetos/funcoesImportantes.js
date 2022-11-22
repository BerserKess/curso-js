const pessoa = {
    nome: 'Kesley',
    idade: 30,
    altura: 1.82,
};

console.log(Object.keys(pessoa)); // retorna as chaves do objeto
console.log(Object.values(pessoa)); // retorna os valores do objeto
console.log(Object.entries(pessoa)); // retorna um array com cada chave e valor sendo outro array

// percorre o array e tia os elementos e separa eles
Object.entries(pessoa).forEach(elemento => {
    console.log(`${elemento[0]}: ${elemento[1]}`);
});

// também da pra fazer com o destructuring
// desmembra o array e junta os inidices em chave e valor novamente
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

// define propriedades de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // passivel de ser listada
    writable: false, // pode ou não ser modificada
    value: '10/09/1993', // valor da chave
});

console.log(pessoa.dataNascimento);
console.log(pessoa);

// Object assing: concatena objetos no objeto de destino

const objetoDestino = { a: 1 };
const obj1 = { b: 2 };
const obj2 = { c: 3, a: 4 }; // vai sobrescrever o valor de a
const objeto = Object.assign(objetoDestino, obj1, obj2);
console.log(objeto);
