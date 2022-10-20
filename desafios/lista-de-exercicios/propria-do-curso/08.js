/**
 * Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”,
 * escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um 
 * vetor com o número de vezes que ele bateu seu recorde de maior número de pontos
 * e quando fez seu pior jogo. (Número do pior jogo).

 */
 const getRamdon = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const pontuacoes = []
for (let i = 0; i <= 10; i++){
    pontuacoes.push(getRamdon(1, 50))
}

console.log(pontuacoes)
