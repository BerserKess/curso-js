/**
 * Desenvolva uma função JavaScript para que ela receba um
 * valor como 0.30000000000000004 e retorne R$0,30
 */

const conversao = (numeroGrande = 0.30000000000000004) => {
    return console.log(`R$ ${numeroGrande.toFixed(2)}`)
}

conversao()
conversao(55.88746132748)
conversao(Math.PI)