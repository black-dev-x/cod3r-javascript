const bancoDeDados = require('./bancoDeDados')

const porta = 3003
const express = require('express') 
const app = express()

const getProdutos = (request, response) => {
    const produtos = bancoDeDados.listarProdutos();
    response.send(produtos);
}

const deletarProdutos = (request, response) => {
    bancoDeDados.deletarTodosProdutos()
    response.send('todos produtos foram removidos')
}

app.get('/produtos', getProdutos)
app.delete('/produtos', deletarProdutos)
app.listen(porta) 
