const produtosEmJSON = [
    '{ "nome": "Livros", "quantidade": 10, "valor": 5}',
    '{ "nome": "Agua", "quantidade": 100, "valor": 4}',
    '{ "nome": "Caderno", "quantidade": 5, "valor": 3}',
    '{ "nome": "Lenços", "quantidade": 200, "valor": 2}',
    '{ "nome": "Chá", "quantidade": 150, "valor": 1}',
    '{ "nome": "Cú", "quantidade": 10000000000000, "valor": 0}',
]

const converteJSONParaObjeto = json => JSON.parse(json)
const adicionaTotalAObjeto = objeto => {
    const objetoClonado = {}
    //muito util para colocar os valores de um objeto em outro
    //afinal imagina colocar uns 1000 atributos na mão em outro objeto xD
    //teria que fazer objetoClonado.valor = objeto.valor, para cada um dos atributos
    Object.assign(objetoClonado, objeto) 
    objetoClonado.total = `${objeto.quantidade * objeto.valor} R$`
    return objetoClonado
}
produtosComTotal = produtosEmJSON.map(converteJSONParaObjeto).map(adicionaTotalAObjeto)

console.log(produtosComTotal)