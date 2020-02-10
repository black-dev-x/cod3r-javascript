const geradorDeId = require('./geradorDeId')
let produtos = [] //vou armazenar em uma lista

const salvarProduto = produto => {
    if(produto.id){ //se já existe um id, então ele já estava na lista!
        const index = produtos.findIndex(p => p.id == produto.id)
        //findIndex assim como o find, são métodos bem úteis
        //mas o find index só retorna aonde esta aquele produto!
        produtos[index] = produto
    } else {
        if(!produto.id) produto.id = geradorDeId.id
        produtos.push(produto)
    }
    return produto
}

const pegarProdutoComOId = id => {
    //Além do map, forEach e filter, temos o find, muito util
    const produto = produtos.find(produto => produto.id == id)
    return produto;
}

const pegarTodosProdutos = () => {
    return produtos
}

const deletarProdutoPeloId = id => {
    produtos = produtos.filter(produto => produto.id != id)
}

module.exports = {
    pegarProdutoComOId,
    salvarProduto,
    pegarTodosProdutos,
    deletarProdutoPeloId
}