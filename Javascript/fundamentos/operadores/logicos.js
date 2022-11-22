/**
 * Operador E &&
 * Verdadeiro e Verdadeiro = Verdeiro
 * Verdadeiro e Falso = Falso
 * Falso e Falso = Falso
 * 
 * Operador OU ||
 * V ou ? = V
 * F ou V = V
 * F ou F = F
 * 
 * OU exclusivo
 * os dois tem de ser diferente
 * V xor V = F
 * V xor F = V
 * F xor F = F
 */

function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))