/**
 * Utilizando a estrutura do Switch faça um programa que simule uma
 * calculadora básicaO programa recebe como parâmetros dois valores
 * numéricos e uma string referente à operação e a realize com os
 * valores numéricos na ordem que foram inseridos.
 * Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma
 * de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
 */
 
const calculadora = (a,b = qualOperacao(),c) =>{
    // verifica qual operação será realizada
    function qualOperacao (operacao) {
        return operacao
     }
     
        switch (b) {
            case '+':
               console.log(`${a} ${b} ${c} = ${a + c}`)
                break
            case '-':
                console.log(`${a} ${b} ${c} = ${a + c}`)
                break
            case '*':
                console.log(`${a} ${b} ${c} = ${a * c}`)
                break
            case '/':
                console.log(`${a} ${b} ${c} = ${a / c}`)
                break
                default:
                    console.log('Operação invalida')
        }   
    }


calculadora(3,'*',2)