let produto1 = 10.50
let produto2 = 12.50
let produto3 = 90.00

if (produto1 < produto2 && produto1 < produto3){
    console.log('Este é o mais barato: ' + produto1.toFixed(2))
} else if (produto2 < produto1 && produto2 < produto3){
    console.log('Este é o mais barato: ' + produto2.toFixed(2))
} else{
    console.log('Este é o mais barato: ' + produto3.toFixed(2))
}