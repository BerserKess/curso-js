/**
 * Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”,
 * escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um 
 * vetor com o número de vezes que ele bateu seu recorde de maior número de pontos
 * e quando fez seu pior jogo. (Número do pior jogo).

 */
const pontuacoes = []
const recordeEPiorResultado = []
let recorde = 0

// gera numero randomicos
const getRamdon = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const getPontucao = () => {
    // cria uma lista com numeros randomicos
    for (let i = 0; i <= 5; i++){
        pontuacoes.push(getRamdon(1, 31))
    }
    
    let maiorPontucao = Number(pontuacoes[0])

    // pega o pior resultado
    const getPiorResultado = pontuacoes.reduce(function (a,b){
        return Math.min(a,b)
    })

    // vai verificar quantas vezes ele quebra o proprio recorde
    for (let x = 0; x <= pontuacoes.length; x++){
        
        if (Number(pontuacoes[x]) > maiorPontucao){
            maiorPontucao = Number(pontuacoes[x])
            recorde++
        } 
    }

    recordeEPiorResultado.push(recorde,getPiorResultado)    
    console.log(pontuacoes)    
    return console.log(recordeEPiorResultado) 
}

getPontucao()


