let produtos = []
const produto1 = {nome: 'Notebook', preco: 3000}
const produto2 = {nome: 'Galinha', preco: 1.99}
produtos.push(produto1)
produtos.push(produto2)

const listarProdutos = () => produtos

const deletarTodosProdutos = () => produtos = []

module.exports = {
    listarProdutos,
    deletarTodosProdutos
}