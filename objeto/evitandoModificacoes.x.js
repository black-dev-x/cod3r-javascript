const objetoCongelado1 = {
    nome: 'Objeto constante',
    idade: 3
}

const objetoCongelado2 = {
    nome: 'Objeto não tão constante',
    lista: [],
    objetoFilho: {}
}

Object.freeze(objetoCongelado1)
Object.freeze(objetoCongelado2)
//atributos primitivos, como textos, numeros e booleans (true e false) não são modificados
//mas arrays e objetos filhos do objeto podem ser.

objetoCongelado2.lista.push(1)
objetoCongelado2.objetoFilho.nome = 'Ysarot'
objetoCongelado1.nome = 'Poporot'
objetoCongelado1.idade = 50
objetoCongelado1.objetoFilhoNovo = {}
console.log(objetoCongelado1)
console.log(objetoCongelado2)
