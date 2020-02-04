const instanciaNovaA = require('./instanciaNova')()
const instanciaNovaB = require('./instanciaNova')()
const instanciaUnicaA = require('./instanciaUnica')
const instanciaUnicaB = require('./instanciaUnica')


instanciaNovaA.valor = "caralho"
console.log(instanciaNovaB.valor)

instanciaUnicaA.valor="merda"
console.log(instanciaUnicaB.valor)



