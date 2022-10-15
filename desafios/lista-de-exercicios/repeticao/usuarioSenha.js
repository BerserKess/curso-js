const gerarNomesAleatorios = function (tamanhoNome){
    let nome = '' // criar uma string vazia
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const tamanhoAlfabeto = alfabeto.length // pega o tamanho da string
    for (let x = 0; x < tamanhoNome; x++){
        // vai criar um nome aleatorio
        nome += alfabeto.charAt(Math.floor(Math.random() * tamanhoAlfabeto)) 
    }
    return nome;
}

let contador = 1

while (contador <= 4){
    var usuario = gerarNomesAleatorios(4)
    var senha = gerarNomesAleatorios(4)
    
    if (contador == 4){
        usuario = gerarNomesAleatorios(4)
        senha = usuario
        console.log('Usuario e senha não podem ser iguais')
    }
    console.log(`Bem vindo ${usuario}`)
    contador++
    

}


