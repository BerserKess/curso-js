const chevrolet = {
    modelo: 'prisma',
    velMax: 220,
};

const fiat = {
    modelo: 'argos',
    velMax: 220,
};

console.log(chevrolet.prototype); // objeto tem definido apenas o __proto__
console.log(chevrolet.__proto__); // o objeto de chevrolet é um objeto vazio e aponta para o object.prototype
console.log(chevrolet.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__); // Object.protype não tem nenhum prototipo depois dele e retorna null

function MeuObjeto() {}
console.log(Object.prototype, MeuObjeto.prototype); //funções também tem prototipo
