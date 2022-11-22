// a constante está apontando para um espaço na memoria e esse espaço contem um objeto
// pessoa => 123 => {...}
// por isso pode ser alterado sem mudar a constante
const pessoa = { nome: 'Kesley' };
pessoa.nome = 'Rainery';
console.log(pessoa);

//a constante agora esta sendo direcionada a outro espaco na memoria e isso gera um erro
//pessoa => 456 => {...}

/*pessoa.nome = {nome: 'França'} // ERRO */

// Object.freeze() congela o objeto sem deixar com que ele seja alterado

Object.freeze(pessoa);
pessoa.nome = 'Vidal';
pessoa.endereco = 'Rua LKD';
delete pessoa.nome;

console.log(pessoa.nome);
