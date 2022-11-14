// criação litera
const obj1 = {};

// Object em JS
console.log(typeof Object, typeof new Object());

const obj2 = new Object();
console.log(obj2);

// Funções construtoras

function Produto(nome, preco, desconto) {
    this.nome = nome;
    this.precoComDesconto = () => {
        return preco * (1 - desconto);
    };
}

const produto1 = new Produto('Caneta', 7.99, 0.15);
const produto2 = new Produto('Celular', 1275.99, 0.2);

console.log(produto1.precoComDesconto());

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        },
    };
}

const funcionario1 = criarFuncionario('Pedro', 7980, 4);
const funcionario2 = criarFuncionario('Joana', 5645, 2);
console.log(funcionario1.getSalario(), funcionario2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = 'Janne';
console.log(filha);
