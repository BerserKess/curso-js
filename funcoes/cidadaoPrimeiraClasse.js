/**
 * Função em JS é First-Class Object
 * Ou seja, a linguagem trata a função como um dado
 * Se você não retornar nada na função ela, por padrão, retorna undefined
 */

// criar função de forma literal
function funcao1(){}

// criar função em uma variavel
const funcao2 = function (){}

// armazenar funcao em um array
const array = [function(a,b){return a+ b}, funcao1, funcao2]
console.log(array[0](2, 3))

// armazenar funcao em um objeto
const obj = {}
obj.falar = function(){return 'Eai'}
console.log(obj.falar())

// passar uma funcao como parametro para outra funcao
function executar(funcaoParametro){
    funcaoParametro()
}
executar(function() {console.log('Ta rodando bixo')})

// Uma funçao pode retornar/ conter outra funcao
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4) // uma possibilidade
const resultadoSoma = soma(2,3) // outra possibilidade
resultadoSoma(4)