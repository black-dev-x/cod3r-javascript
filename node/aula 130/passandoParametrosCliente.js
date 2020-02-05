const transformaNomesEmSaudacoes = require('./passandoParametros')
const nomes = ['Maria', 'João', 'Ana']
const saudacoes = transformaNomesEmSaudacoes(...nomes)
console.log(saudacoes)
