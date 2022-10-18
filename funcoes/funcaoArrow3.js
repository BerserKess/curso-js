let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this===param)
comparaComThisArrow(global) // dentro de uma função arrow o  this não aponta para o global
comparaComThisArrow(module.exports) // ou this

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // Na arrow function o bind não vai funcionar, ele segura o objeto padrão (module.exports)
comparaComThisArrow(module.exports)