/**
 *  Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
 */

const planoDeSaude = (idade) => {
    const valorBase = 100
    let valorAdicional = 0
    if (idade < 10){
        valorAdicional = 80
        console.log(`Valor a ser pago: R$ ${valorAdicional + valorBase}`)
    } else if (idade >= 10 && idade <= 30){
        valorAdicional = 50
        console.log(`Valor a ser pago: R$ ${valorAdicional + valorBase}`)
    } else if (idade > 30 && idade <= 60){
        valorAdicional = 95
        console.log(`Valor a ser pago: R$ ${valorAdicional + valorBase}`)
    } else if (idade > 60){
        valorAdicional = 130
        console.log(`Valor a ser pago: R$ ${valorAdicional + valorBase}`)
    }
    
}

planoDeSaude(89)