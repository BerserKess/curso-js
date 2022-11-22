/**
 * .Map vai mapear um array para um outro array do mesmo tamanho
 *  mas com os dados transformados
 * é um for com proposito
 */

const numeros = [1, 2, 3, 4, 5, 68];

let resultado = numeros.map(function (elemento) {
    return elemento * 2;
});
console.log(resultado);

const somar20 = elemento => elemento + 20;
const triplicar = elemento => elemento * 3;
const transformarEmDinheiro = elemento =>
    `R$: ${parseFloat(elemento).toFixed(2).replace('.', ',')}`;

resultado = numeros.map(somar20).map(triplicar).map(transformarEmDinheiro);
console.log(resultado);
