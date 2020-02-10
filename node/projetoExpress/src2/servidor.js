const app = require('express')()
const bodyParser = require('body-parser')
const bancoDeDados = require('../src2/bancoDeDados')
app.use(bodyParser.json()) 

const getProdutos = (req, res) => {
    const produtos = bancoDeDados.pegarTodosProdutos()
    res.send(produtos)
}
const getProdutoPeloId = (req, res) => {
    const id = req.params.id;
    const produto = bancoDeDados.pegarProdutoComOId(id)
    res.send(produto)
}
const deletarProdutoPeloId = (req, res) => {
    const id = req.params.id;
    bancoDeDados.deletarProdutoPeloId(id)
    res.send('Produto deletado com sucesso')
}
const salvarProduto = (req, res) => {
    const produto = req.body
    const produtoSalvo = bancoDeDados.salvarProduto(produto)
    res.send(produtoSalvo)
}
app.get('/produtos', getProdutos)
app.get('/produtos/:id', getProdutoPeloId)
app.delete('/produtos/:id', deletarProdutoPeloId)
app.post('/produtos', salvarProduto)
app.listen(3003)



