const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(resposta => {
    const funcionarios = resposta.data
    console.log(funcionarios)
})