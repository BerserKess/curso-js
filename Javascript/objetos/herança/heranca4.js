/**
 * Quando se cria um objeto a partir
 * de uma função construtora o __proto__ desse objeto
 * vai apontar para suaFunção.prototype e não para Object.prototype
 */

function MeuObjeto() {}

const objeto1 = new MeuObjeto(); // cria um novo objeto através da função
const objeto2 = new MeuObjeto();

console.log(objeto1.__proto__ === objeto2.__proto__); // o proto dos objetos criados vão apontar para o MeuObjeto.prototype
console.log(MeuObjeto.prototype === objeto1.__proto__);

MeuObjeto.prototype.nome = 'Anonimous';
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${(this, this.nome)}`);
};

objeto1.falar();
objeto2.nome = 'Kesley';
objeto2.falar();

const objeto3 = {};
objeto3.__proto__ = MeuObjeto.prototype; // muda o __proto__ do objeto criado para o MeuObjeto.prototype

objeto3.nome = 'Rainery';
objeto3.falar();

// Resumindo
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype); // a instancia de um novo objeto vai apontar para a funça construtora
console.log(MeuObjeto.__proto__ === Function.prototype); // O atributo __proto__ da função Meu objeto vai apontar para Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype); //o atributo __proto__ da Function.prototype aponta para o Object.prototype
console.log(Object.prototype.__proto__ === null); //depois do object.prototype não tem mais nada, retorna null
