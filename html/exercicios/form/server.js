//imports para criar um servidor
const app = require('express')()
const bodyParser = require('body-parser')

//configurações do servidor
app.use(bodyParser.urlencoded({ extended: true }))

//metodos do servidor
const cadastrarGalinha = (req, res) => {
  const formulario = req.body
  const resposta = `
<p>A galinha de nome ${formulario.nomeDaGalinha}</p>
<p>Disse um palavrão, que absurdo, que era "${formulario.palavraoDaGalinha}"</p>
<p>E ela vem da ${formulario.estado}, obviamente, mesmo que ela não queira</p>
<p>Gostou ysarot?</p>
  `
  res.send(resposta)
}

app.post('/galinhas', cadastrarGalinha)
app.listen(3003)