const moedas = new Map()
moedas.set('real','R$')
moedas.set('dolar','$')
moedas.set('gil', 'G')

const possuoEuro = moedas.has('euro')
const possuoReal = moedas.has('real')
const possuoR$ = moedas.has('R$')
console.log(possuoEuro, possuoReal, possuoR$)