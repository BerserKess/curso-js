/**
 * Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
 */

const retornarIntervalo = (minimo, maximo) => {
    const listaNumerica = []
    let dentroDoIntervalo = 0
    let foraDoIntervalo = -1
    for(let x = 0; x <= 50; x++){
        listaNumerica.push(x)        
    }
    for (let i of listaNumerica){
      if(Number(listaNumerica[i]) >= minimo && Number(listaNumerica[i] <= maximo)){
        dentroDoIntervalo++
      } else{
        foraDoIntervalo++
      }
        
    }

    return console.log(`Dentro do intervalo: ${dentroDoIntervalo} e Fora do intervalo: ${foraDoIntervalo}`)
}

retornarIntervalo(20,40)