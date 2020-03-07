//imports para criar um servidor
const app = require('express')()
const bodyParser = require('body-parser')

//configurações do servidor
app.use(bodyParser.urlencoded({ extended: true }))

const frases = []
//metodos do servidor
const criarNovaFrase = (req, res) => {
  const novaFrase = req.body.frase
  frases.push(novaFrase)
  resposta = ''
  frases.forEach(frase => resposta += frase + '<br>')
  res.send(resposta)
}

app.post('/frases', criarNovaFrase)
app.listen(3003)