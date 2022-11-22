class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        // parametros da função construtora

        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }
    addLancamentos(...lancamentos) {
        // recebe os lançamentos para adicionar no array
        lancamentos.forEach(elemento => this.lancamentos.push(elemento));
    }
    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(elemento => {
            // para cada um dos lançamentos vai somar o valor consolidado
            valorConsolidado += elemento.valor;
        });
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario', 2000);
const contaDeLuz = new Lancamento('Luz', -180);
const contaDeAgua = new Lancamento('Agua', -80);

const contas = new CicloFinanceiro(11, 2022);
contas.addLancamentos(salario, contaDeAgua, contaDeLuz);
console.log(contas.sumario());
