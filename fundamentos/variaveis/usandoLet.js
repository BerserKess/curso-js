/**
 * Let vai ter escopo só dentro do bloco
 * vai dar preferência por pegar o escopo menor
 * tem escopo global, de função e de bloco
 */

let numero = 1;
{
    let numero = 2;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero)