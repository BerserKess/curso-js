/**
 *  Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
 */
const getRamdon = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const AprovadoOuReprovado = (codigo, nota1, nota2, nota3)=> {
    while(codigo >= 0){
    let notas = [nota1, nota2, nota3]
    const pesoMaior = 4
    const pesoMenor = 3
    let status = ''
    
    const notaMaior = notas.reduce(function(a,b){
        return Math.max(a,b)
    })
    let posicaoNotaMaior = notas.indexOf(notaMaior)
    if (posicaoNotaMaior > -1){
        notas.splice(posicaoNotaMaior,1)
        
    }
    mediaPonderada = ((notaMaior * pesoMaior) + (Number(notas[0]) * pesoMenor) + (Number(notas[1]) * pesoMenor)) / (pesoMaior + (pesoMenor * 2))

    if (mediaPonderada >= 5) {
        status = 'Aprovado'
    } else {
        status = 'Reprovado'
    }

    return console.log(`Aluno ${codigo}
    Primeira nota: ${nota1}
    Segunda nota: ${nota2}
    Terceira nota: ${nota3}
    Média do aluno: ${(mediaPonderada).toFixed(1)}
    Aprovado ou Reprovado: ${status}`)
}
}

AprovadoOuReprovado(getRamdon(10, -5),getRamdon(10,1),getRamdon(10,1),getRamdon(10,1))