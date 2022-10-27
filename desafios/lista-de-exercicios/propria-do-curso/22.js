/**
 * Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
 */

const anuidade = (mes, valor) =>{
    const juros = 0.05
    let anuidadeComJuros = 0
    if (mes == 1){
        console.log(`Anuidade: ${valor}`)
    } else {
        for (let x  = 2; x <= mes ; x++){
            anuidadeComJuros = valor * Math.pow(1 + juros, mes)
        }

        console.log(`Anuidade: ${(anuidadeComJuros).toFixed(2)}`)
    }    
}

anuidade(2, 550)