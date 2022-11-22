function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado, pertence apenas a funçao carro
    let velocidadeAtual = 0

    //metodo publico, é visivel fora da função construtora carro
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico, que pega a velociddade atual depois do acelerar
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro // instancia um novo objeto
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const prisma = new Carro(220, 8)
prisma.acelerar()
console.log(prisma.getVelocidadeAtual())

console.log(typeof Carro) // function
console.log(typeof prisma) // object