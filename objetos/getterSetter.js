const sequencia = {
    _valor: 1, // por convenção, objetos privados são escritos com _ na frente
    get valor() {
        return this._valor++;
    },
    set valor(valor) {
        if (valor > this._valor) {
            // troca o valor de _valor se o parametro passado for maior
            this._valor = valor;
        }
    },
};
console.log(sequencia.valor, sequencia.valor);
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 10;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 10;
console.log(sequencia.valor, sequencia.valor);
