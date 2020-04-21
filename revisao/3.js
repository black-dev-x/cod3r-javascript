const lista1 = [412, 3246, 4376345, 73543, 23432, 46737, 35, 373552352, 7345432423, 624423634, 5242357]
const lista2 = [2132121235213, 2121511231561, 4123126124125314, 125263723527, 54353474435235, 4352347235]

const maiorValor = lista => {
  const primeiroValor = lista[0]
  let maior = primeiroValor
  for (let i = 0; i < lista.length; i++) {
    const valorAtual = lista[i]
    if (maior < valorAtual) {
      maior = valorAtual
    }
  }
  return maior
}

console.log(maiorValor(lista1))
console.log(maiorValor(lista2))
