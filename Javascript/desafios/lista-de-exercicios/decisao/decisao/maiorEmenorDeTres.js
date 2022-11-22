let numero1 = 10;
let numero2 = 15;
let numero3 = 70;

if (numero1 > numero2 && numero1 > numero3){
    console.log('Este é o maior: ' + numero1);
    if (numero2 < numero1 && numero2 < numero3){
        console.log('Este é o menor: ' + numero2)
    } else{
        console.log('Este é o menor: ' + numero3)
    }
} else if (numero2 > numero1 && numero2 > numero3){
    console.log('Este é o maior: ' + numero2);
    if (numero1 < numero2 && numero1 < numero3){
        console.log('Este é o menor: ' + numero1)
    } else{
        console.log('Este é o menor: ' + numero3)
    }
} else {
    console.log('Este é o maior: ' + numero3);
    if (numero2 < numero1 && numero2 < numero3){
        console.log('Este é o menor: ' + numero2)
    } else{
        console.log('Este é o menor: ' + numero1)
    }
}