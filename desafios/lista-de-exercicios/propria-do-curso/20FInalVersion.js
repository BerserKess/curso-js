const getValor = (valor) =>{
    
    let notaDe100 = 0
    let notaDe50 = 0
    let notaDe10 = 0
    let notaDe5 = 0
    let notaDe1 = 0
    // Diminuir o valor e adicionar as notas
    if (valor > 0) {
        for (;valor >= 100;){
            notaDe100++
            valor -= 100
        } for (;valor >= 50;){
            notaDe50++
            valor -= 50
        } for (;valor >= 10;){
            notaDe10++
            valor -= 10
        } for (;valor >= 5;){
            notaDe5++
            valor -= 5
        } for (;valor >= 1;){
            notaDe1++
            valor -= 1
        }
    // imprimir a quantidade de notas
    } if (notaDe100 > 0) {
        console.log("A quantidade de notas 100 é: " + notaDe100)
    } if (notaDe50 > 0) {
        console.log("A quantidade de notas 50 é: " + notaDe50)
    } if (notaDe10 > 0){
        console.log("A quantidade de notas 10 é: " + notaDe10)
    } if (notaDe5 > 0){
        console.log("A quantidade de notas 5 é: " + notaDe5)
    } if (notaDe1 > 0){
        console.log("A quantidade de notas 1 é: " + notaDe1)
    }
  
}

getValor(1258)