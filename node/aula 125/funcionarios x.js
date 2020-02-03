const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(resposta => {
    const funcionarios = resposta.data
    const salarios = funcionarios.map(funcionario => funcionario.salario)
    const maiorSalario = salarios.reduce( (acumulador, salario)=>{
        //acumulador começa valendo 0, por causa do segundo parâmetro.
        if(salario > acumulador){
            return salario;
        } else {
            return acumulador;
        }
        //esse é um bom exemplo de uso do reduce, o problema é que ainda assim o código é difícil de ler
        //reduce não é uma coisa muito corriqueira de se utilizar
    }, 0);
    console.log(maiorSalario) 
})