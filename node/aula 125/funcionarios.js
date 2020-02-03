const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(resposta => {
    const funcionarios = resposta.data
    const menorSalario = funcionarios
                .filter(funcionario => funcionario.pais == 'China')
                .filter(funcionario => funcionario.genero == 'F')
                .map(funcionario => funcionario.salario)
                .reduce( (acumulador, salario) => {
                    return acumulador < salario ? acumulador : salario
                })
    console.log(menorSalario)
})