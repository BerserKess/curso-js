/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
 * A primeira função retornará o montante da aplicação financeira sob o regime de juros simples
 * e a segunda retornará o valor da aplicação sob o regime de juros compostos.
 */

function jurosSimples (capitalInicial, taxaJuros, tempoAplicao){
    return console.log(`Montante com juros simples: ${capitalInicial + (capitalInicial * taxaJuros *  tempoAplicao)}`)
}

const jurosComposto = (capital, juros, tempo) => {
    let montante = capital * Math.pow(1 + juros, tempo)
    return console.log(`Montante com juros composto: ${montante.toFixed(2)}`)
}

jurosSimples(2000,0.10,6)
jurosComposto(2000,0.10,6)