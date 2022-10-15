let nota1 = parseFloat(10);
let nota2 = parseFloat(10);

const media = (nota1 + nota2) / 2;

if(media === 10){
    console.log('Aprovado com distinção');
} else if(media >= 7 && media < 10) {
    console.log('Aprovado')
} else{
    console.log('Reprovado')
}