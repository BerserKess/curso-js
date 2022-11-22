/**
 * No JS,Quando diz que uma classe extende de outra é a mesma coisa que dizer que seu
 * prottype vem de outra,
 */

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, nome, profissao = 'Mecanico') {
        super(sobrenome);
        this.profissao = profissao;
        this.nome = nome;
    }
}

class Filho extends Pai {
    constructor() {
        super('Vidal');
    }
}
const pai = new Pai();
const filho = new Filho();
pai.nome = 'José';
filho.nome = 'Kesley';

console.log(filho);
