function multiplicao(numero1, numero2){
    let acumulador = 0
    let contador = 1

    while (contador <= numero2){
        acumulador += numero1
        contador++
    }

    return console.log(acumulador)
    //return numero1 * numero2
}

multiplicao(0,7)