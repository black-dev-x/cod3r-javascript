const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(res => {
    const funcionarios = res.data

    const xxxxx = funcionarios.filter(funcionario => funcionario.pais === 'China')
                              .filter(funcionario => funcionario.salario > 22000)
                              .filter(funcionario => funcionario.genero === 'F')
                              .map(funcionario => funcionario.nome)
    
    const ultimoXXXXX = xxxxx[xxxxx.length-1];

    console.log(ultimoXXXXX.substr(0,3)) 
})