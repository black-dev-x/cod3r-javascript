const Loja = require('./Loja')
const Campeao = require('./Campeao')


Campeao.quantosCampeoes();
Campeao.removerDoLol('Braum')
Campeao.removerDoLol('Taric')
Campeao.quantosCampeoes();

Loja.comprarRP(10000)
Loja.gastarRP(2000000)