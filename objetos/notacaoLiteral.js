const a = 1;
const b = 2;
const c = 3;

const obj1 = { a, b, c }; // declara o nome da constante e ele ja pega o valor
console.log(obj1);

const nomeAtributo = 'valor';
const valorAtributo = 5.99;

const obj2 = { [nomeAtributo]: valorAtributo };
console.log(obj2);

const obj3 = {
    function1: function () {
        // Ja foi assim
    },
    function2() {
        //agora é assim
    },
};
