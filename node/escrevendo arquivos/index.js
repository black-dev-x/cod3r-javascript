const fs = require('fs')
//supondo que posuimos uma lista de clientes vindo de um json
const clientes = require('./bancoDeDados.json')
//e para cada cliente queremos enviar uma mensagem
//que vamos guardar primeiro em um arquivo email.txt
const mensagens = clientes.map(cliente =>{
    return `
    ${cliente.sexo=='F'?'Senhora': 'Senhor'} ${cliente.nome},
    queremos te informar que você é ...
    ${cliente.nome=='Lysk'?'Terrivel':'Horrível'} no lol...
    E por isso decidimos remover o seu campeão favorito
    do jogo, ${cliente.favorito}. SHAME ON YOU.
    Cordialmente, Riot
`
})
fs.writeFile(`${__dirname}/email.txt`, mensagens, (erro)=>{
    if(erro){
        console.log('Não consegui enviar o e-mail')
    } else {
        console.log('Clientes especiais foram informados')
    }
})