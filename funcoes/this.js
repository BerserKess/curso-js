/**
 * this pode variar de acordo como a função é chamada
 * se usar arrow function o this não varia nunca
 * o this fica associado ao local em que a função foi escrita quando em arrow function
 * No bind  você passa um objeto que vai ser resolvido o this
 */

const pessoa = {
    saudacao: 'Ola',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()

// armazenar função em uma const
// objeto não vai identificar o this
const falar = pessoa.falar
falar()
// vai vincular a const pessoa com o uso do bind()
const falaVai = pessoa.falar.bind(pessoa)
falaVai()