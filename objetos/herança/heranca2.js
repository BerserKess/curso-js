// prototype chain
const avo = { atributo1: 'A' };
const pai = { __proto__: avo, atributo2: 'B', atributo3: 3 };
const filho = { __proto__: pai, atributo3: 'C' }; // filho pega os atributos 1 e 2 do pai e mantêm o terceiro
console.log(filho.atributo1, filho.atributo2, filho.atributo3);

const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    acelerar(delta) {
        if (this.velocidadeAtual + delta <= this.velocidadeMaxima) {
            this.velocidadeAtual += delta;
        } else {
            this.velocidadeAtual = this.velocidadeMaxima;
        }
    },
    statusVelocidade() {
        return `${this.velocidadeAtual}km/h de ${this.velocidadeMaxima}km/h`;
    },
};

const chevrolet = {
    modelo: 'prisma',
    velocidadeMaxima: 220, // shadowing: sobrescreve o valor passado pelo pai
};

const fiat = {
    modelo: 'argos',
    statusVelocidade() {
        return `${this.modelo}: ${super.statusVelocidade()}`; // vai pegar o modelo do objeto e a função status do objeto maior
    },
};

Object.setPrototypeOf(chevrolet, carro); // função para o objeto filho pegar os atributos do objeto pai
Object.setPrototypeOf(fiat, carro);

console.log(chevrolet);
console.log(fiat);

fiat.acelerar(100);
console.log(fiat.statusVelocidade());

chevrolet.acelerar(300);
console.log(chevrolet.statusVelocidade());
