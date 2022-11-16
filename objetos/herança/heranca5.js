String.prototype.reverse = function () {
    //adiciona novas funções ou atributos dentro do prototipo de String
    return this.split('').reverse().join('');
};
console.log('Escola'.reverse());

Array.prototype.first = function () {
    return this[0];
};

console.log([0, 2, 3, 54, 8, 63].first());
