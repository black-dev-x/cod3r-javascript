const app = require('express')()

let contador = 0;

const getContador = (req, res) => {
    res.send(`O contador vale ${contador}`)
}

const atualizaContador = (req, res) => {
    contador++
    res.send(`O contador foi atualizado!`)
}

const resetaContador = (req, res) => {
    contador = 0
    res.send(`Começando tudo de novo`)
}

app.get('/contador', getContador)
app.put('/contador', atualizaContador)
app.delete('/contador', resetaContador)
app.listen(8000)