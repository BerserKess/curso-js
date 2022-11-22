function pessoa (){
    this.idade = 0

    // armazena o this em uma const para garantir que será acessado pelo setInteval
    // vai disparar a função a cada 1s
    // também pode ser feito com bind
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this) */, 1000)
}

new pessoa