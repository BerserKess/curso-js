function rand ([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] // se o operador min for maior troca os valores
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]));
console.log(rand([992]));
console.log(rand([,10]));
console.log(rand([]));
console.log(rand()); // vai dar erro pois não consegue ler propriedades de undefined