function novoProduto (nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(novoProduto('Ovo', 5.00))