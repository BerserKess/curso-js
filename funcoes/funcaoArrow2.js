// this não varia de acordo com quem chama na arrow function

function pessoa () {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa