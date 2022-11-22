const pai = { nome: 'Bruce', corDoCabelo: 'Preto' };

const filha = Object.create(pai); // cria um objeto com os atributos do objeto pai
filha.nome = 'Barbara';
console.log(filha.corDoCabelo);

const filho = Object.create(pai, {
    nome: { value: 'Tim', writable: false, enumerable: true },
});

console.log(`${filho.nome} tem cabelo ${filho.corDoCabelo}`);

console.log(Object.keys(filho)); // não passa os atributos que vem do objeto pai

for (let key in filho) {
    console.log(key); // imprimi todos os atributos do objeto
}
for (let key in filho) {
    filho.hasOwnProperty(key) // verifica qual atributo é do proprio objeto ou se veio por herança
        ? console.log(key)
        : console.log(`Por Herança: ${key}`);
}
