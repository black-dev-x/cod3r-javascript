const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const lista2 = [2, 3, 4, 1, 2, 5, 3342, 3, 52343, 321, 3125, 2352, 412, 312, 55436, 23124]
const calculaMedia = parametro => {
  let soma = 0
  parametro.forEach(valor => (soma += valor))
  const totalDeElementos = parametro.length
  const media = soma / totalDeElementos
  return media
}

const media1 = calculaMedia(lista1)
console.log(media1) //se esta dando undefined é que você esqueceu do return

const media2 = calculaMedia(lista2)
console.log(media2)
