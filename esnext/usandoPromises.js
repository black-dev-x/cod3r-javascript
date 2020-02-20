const http = require('http')
const getTurma = nome => {
    const url = `http://files.cod3r.com.br/curso-js/turma${nome}.json`
    return new Promise(resolve => {
        http.get(url, response => {
            let resultado = ''
            response.on('data', dados => {
                resultado += dados
            })
            response.on('end', () => {
                resolve(JSON.parse(resultado))
            })
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => console.log(alunos))