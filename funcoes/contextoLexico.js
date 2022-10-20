/**
 * A unção sempre vai procurar o local em que ela foi definida
 * Nesse exemplo a minhaFuncao vai localizar o valor 'Global' por ele está mais proximo
 * de onde a mesma foi definida
 */

const valor = 'Global'
 function minhaFuncao(){
    console.log(valor)
 }

 function exec (){
    const valor = 'Local'
    minhaFuncao()
 }

 exec()
