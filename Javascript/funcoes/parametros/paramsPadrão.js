// primeira forma gerar valor padrão

function somar1 (a,b,c){
    a = a || 1 // se o valor de ar não for deifinido, por padrão vai ser 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(somar1())
console.log(somar1(3))
console.log(somar1(1,2,3))
console.log(somar1(0,0,0)) // vai dar errado porque como zero ele se torna falso e o valor fica um por padrão

// segunda, terceira, quarta forma de retornar um valor padrão
function somar2(a,b,c){
    a = a != undefined ? a : 1 // se o valor de a for diferente de undefined ele recebe ele mesmo, se não ele recebe 1 como padrão
    b = 1 in arguments ? b : 1 // se existir o indice 1 em arguments ele retorna ele, se não ele retorna 1
    c = isNaN(c) ? 1:c // se o valor de c for um NaN retorna por padrão 1, se não retorna o valor definido

    return a + b + c
}

console.log(somar2())
console.log(somar2(3))
console.log(somar2(1,2,3))
console.log(somar2(0,0,0))

// forma do es2015 (mais recente)
function somar3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(somar3())
console.log(somar3(3))
console.log(somar3(1,2,3))
console.log(somar3(0,0,0))