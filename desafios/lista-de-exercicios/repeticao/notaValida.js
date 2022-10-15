const aleatorio = function (min, max){
    const nota = Math.random() * (max - min)
    return Math.floor(nota)
}

let notaAceitavel = 0
while (notaAceitavel <= 10 && notaAceitavel >= 0){
    notaAceitavel = aleatorio(-1, 11)
    if (notaAceitavel < 0 || notaAceitavel > 10){
        console.log(`${notaAceitavel} é uma nota invalida`)
    } else{
        console.log(`A nota digita foi: ${notaAceitavel}`)
    }
    
}

console.log('Fim de jogo')