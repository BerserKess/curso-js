function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula('bem vindo', 123);
console.log(aula1);

// como funciona o new
function novo(funcao, ...parametros) {
    const objeto = {}; // cria um objeto vazio
    objeto.__proto__ = funcao.prototype; // aponta o proto para funcao.prototype
    funcao.apply(objeto, parametros); // executa a funcao passando o objeto e os parametros
    return objeto;
}
const aula2 = novo(Aula, 'Até mais', 456);
console.log(aula2);
