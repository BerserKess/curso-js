// Object.preventExtensions: previne que novos atributos sejam adicionados ao objeto
// consegue alterar os atributos que ja estão presentes no objeto e deletar também
const produto = Object.preventExtensions({
    nome: 'Qualquer um',
    preco: 3.0,
    tag: 'escolar',
});
produto.descricao = 'borracha branca escolar';
produto.nome = 'borracha';
delete produto.tag;
console.log(produto);

// Object.seal: Não deixa adicionar ou deletar atributos mas deixa alterar os que ja tem

const pessoa = { nome: 'Kesley', idade: 32 };
Object.seal(pessoa);
pessoa.sobrenome = 'Vidal';
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze: igual ao seal, porem não deixa alterar os atributos que ja tem
