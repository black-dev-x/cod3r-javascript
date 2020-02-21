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

let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
}

obterAlunos.then(alunos => console.log(alunos))