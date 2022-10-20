/**
 * sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que
 * na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12.
 * Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado,
 * mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne,
 * ao invés do vetor, um string com a frase: “Delta é negativo”.
 */

const bhaskara = (ax2, bx, c) => {
        let resultados = []
        let delta = Math.pow(bx,2) - (4 * ax2 * c)
        if (delta < 0) {
            console.log(`Delta negativo (${delta}), a equação não possui raízes reais;`)
        } else if (delta === 0) {
            let x1 =  -bx / (2 * ax2)
            let x2 = x1
            resultados.push(x1,x2)
            console.log(`Delta igual a ${delta}, a equação possui raízes reais iguais: ${resultados}`)
        } else {
            x1 = (-bx + Math.sqrt(delta)) / 2 * ax2
            x2 = (-bx - Math.sqrt(delta)) / 2 * ax2
            resultados.push(x1,x2)
            console.log (`Delta igual a ${delta}, a equação possui duas raízes reais e distintas: ${resultados}`)
                       
        }
    
}
bhaskara (1,8,-9)