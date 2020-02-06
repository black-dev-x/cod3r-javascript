const fs = require('fs')

const caminhoDoArquivo = `${__dirname}/arquivo.x.txt`
fs.readFile(caminhoDoArquivo, 'base64', (erro, conteudo)=>{
    if(erro){
        console.log(`obtive um erro ao ler o arquivo 
        descrição do erro:
        ${erro}`)
    } else {
        console.log('Obtive o seguinte conteúdo do arquivo:')
        console.log(conteudo)
    }
})

const conteudo = require('./arquivo.x.json')
console.log(`${conteudo.destinatario}!!! ${conteudo.mensagem}`)