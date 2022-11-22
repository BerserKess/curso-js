/**
 * função arror é sempre anonima
 */
let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}
// se tive apenas um parametro
dobro = a => 2 * a 
console.log(dobro(Math.PI))

let fala = function () {
    return 'Eai'
}

fala = () => 'Diz'
fala = _ => 'Diz de novo' // recebe um parametro

console.log(fala())