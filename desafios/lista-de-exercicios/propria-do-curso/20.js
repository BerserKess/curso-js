/**
 * Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

const getValor = (valor) =>{
    const valorSeparado = valor.toString().split('')
    let notaDe100 = 0
    let notaDe50 = 0
    let notaDe10 = 0
    let notaDe5 = 0
    let notaDe1 = 0

    if (valorSeparado.length < 5){
        if (valor == 1000){
            notaDe100 = 10
            console.log(`O valor é: R$ ${(valor).toFixed(2)}. Você vai receber ${notaDe100} Notas de 100`)
        } else if (valor > 1000){
            console.log('Só pode retirar 1000 por dia')
        } else if (valorSeparado.length == 3){
            // centena
            notaDe100 = Number(valorSeparado[0])
            // dezena
            if(Number(valorSeparado[1]) >= 1 && Number(valorSeparado[1]) <= 4){
                notaDe10 = valorSeparado[1]
            } if(Number(valorSeparado[1]) == 5){
                notaDe50 = 1
            } if(Number(valorSeparado[1]) >= 6 && Number(valorSeparado[1]) <= 9){
                notaDe50 = 1
                notaDe10 = Number(valorSeparado[1]) - 5
            }
            //unidade
            if (Number(valorSeparado[2]) >= 1 && Number(valorSeparado[2]) <= 4){
                notaDe1 = valorSeparado[2]
            }if(Number(valorSeparado[2]) == 5){
                notaDe5 = 1
            } if(Number(valorSeparado[2]) >= 6 && Number(valorSeparado[2]) <= 9){
                notaDe5 = 1
                notaDe1 = Number(valorSeparado[2]) - 5
            }

            if (notaDe5 == 0){
                console.log(`O valor é: R$ ${(valor).toFixed(2)}. Você vai receber ${notaDe100} Notas de 100,${notaDe50} Notas de 50, ${notaDe10} Notas de 10,e ${notaDe1} Notas de 1`)
            } else if (notaDe5 = 1) {
                console.log(`O valor é: R$ ${(valor).toFixed(2)}. Você vai receber ${notaDe100} Notas de 100,${notaDe50} Notas de 50, ${notaDe10} e Notas de 10 e ${notaDe5} Notas de 5`)
            }
            else if(notaDe50 == 0) {
                console.log(`O valor é: R$ ${(valor).toFixed(2)}. Você vai receber ${notaDe100} Notas de 100, ${notaDe10} Notas de 10, ${notaDe5} Notas de 5 e ${notaDe1} Notas de 1`)
            } else {
                console.log(
                    `O valor é: R$ ${(valor).toFixed(2)}. Você vai receber ${notaDe100} Notas de 100,${notaDe50} Notas de 50, ${notaDe10} Notas de 10, ${notaDe5} Notas de 5 e ${notaDe1} Notas de 1`)
            }
             
        } else if (valorSeparado.length == 2){
            // dezena
            if (Number(valorSeparado[0]) == 5) {
                notaDe50 = 1
            } else if (Number(valorSeparado[0]) >= 6 && Number(valorSeparado[0]) <= 9){
                notaDe50 = 1
                notaDe10 = Number(valorSeparado[0]) - 5
            } else {
                notaDe10 = Number(valorSeparado[0])
            }
            
            // unidade
            if(Number(valorSeparado[1]) >= 1 && Number(valorSeparado[1]) <= 4){
                notaDe1 = valorSeparado[1]
            } if(Number(valorSeparado[1]) == 5){
                notaDe5 = 1
            } if(Number(valorSeparado[1]) >= 6 && Number(valorSeparado[1]) <= 9){
                notaDe5 = 1
                notaDe1 = Number(valorSeparado[1]) - 5
            }

            if (notaDe50 == 0){
                if(notaDe5 == 1){
                    console.log(`O valor é: R$ ${(valor).toFixed(2)}. Você vai receber ${notaDe10} Notas de 10, ${notaDe5} Notas de 5 e ${notaDe1} Notas de 1`)
                } else if (notaDe5 == 0){
                    console.log(`O valor é: R$ ${(valor).toFixed(2)}. Você vai receber ${notaDe10} Notas de 10,e ${notaDe1} Notas de 1`)
                }
                else {
                    console.log(`O valor é: R$ ${(valor).toFixed(2)}. Você vai receber ${notaDe10} Notas de 10,e ${notaDe1} Notas de 1`)
                } 
            } else if (notaDe50 == 1) {
                if (notaDe5 == 1) {
                    console.log(`O valor é: R$ ${(valor).toFixed(2)}. Você vai receber ${notaDe50} Notas de 50,${notaDe10} Notas de 10, ${notaDe5} Notas de 5 e ${notaDe1} Notas de 1`)
                } else if (notaDe5 == 0) {
                    console.log(`O valor é: R$ ${(valor).toFixed(2)}. Você vai receber ${notaDe50} Notas de 50, ${notaDe1} Notas de 1`)
                }
                 else {
                    console.log(`O valor é: R$ ${(valor).toFixed(2)}. Você vai receber ${notaDe50} Notas de 50, ${notaDe10} Notas de 10, ${notaDe5} Notas de 5 e ${notaDe1} Notas de 1`)
                }
                
            }
            else if(notaDe5 == 0) {
                console.log(`O valor é: R$ ${(valor).toFixed(2)}. Você vai receber ${notaDe10} Notas de 10 e ${notaDe1} Notas de 1`)
            }
             
        }
    }
        

}

getValor(945)