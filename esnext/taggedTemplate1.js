function tag(partes, ...valores) {
    console.log(partes) //[ '', ' esta ', '' ]
    console.log(valores) //[ 'Gui', 'Aprovado' ]
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag ` ${aluno} esta ${situacao}.`)