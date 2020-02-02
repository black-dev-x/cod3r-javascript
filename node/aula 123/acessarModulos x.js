const http = require('http')
http.createServer( (requisicao, resposta) => {
    resposta.write('Ola ysarot')
    resposta.end()
}).listen(80)