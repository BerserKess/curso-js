const notas = [6.1, 8.9, 5.5, 7.0, 7.5]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa ={
    nome: 'Kesley',
    idade: 29,
    peso: 110
}

for (let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
}