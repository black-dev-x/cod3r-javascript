const imprime = (valor = 'Valor não informado') => console.log(valor)
const quantasVariaveis = (...variaveis) => variaveis.length

const numeroDeVariaveis = quantasVariaveis(1,2,3,4,5,'a','6')
imprime()
imprime(numeroDeVariaveis)
