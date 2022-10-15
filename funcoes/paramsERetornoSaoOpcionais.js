function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m²`)
    } else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2)) // só um parametro
console.log(area()) // nenhum parametro
console.log(area(2,2,5,7,10,5)) // mais parametros do que solicitado, vai pegar o necessario e ignorar o resto
console.log(area(5,5))