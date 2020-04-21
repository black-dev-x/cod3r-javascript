const lista1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, -5123, 32, 4, 6, 32, 41, 434, 645, 7, 2, 34, 36735, 7345345, 230]
const lista2 = []

for (let i = 0; i < 9999999; i++) {
  lista2.push(i)
  lista2.push(-i)
}
const encontraOValorMinimoDentroDeUmaLista = lista => {
  let menorValor = lista[0]
  lista.forEach(valor => {
    if (valor < menorvalor) {
      menorValor = valor
    }
  })
  return menorValor
}

console.log(encontraOValorMinimoDentroDeUmaLista(lista1))
const valorMinimoDaLista2 = encontraOValorMinimoDentroDeUmaLista(lista2)
console.log(valorMinimoDaLista2)
