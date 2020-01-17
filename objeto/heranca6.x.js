function Aula(nome){
    this.nome = nome
}
const aulaCriadaComNew = new Aula('Aula 1')
console.log(aulaCriadaComNew)

function novo(funcaoConstrutora, ...parametros){
    const objetoNovo = {}
    objetoNovo.__proto__ = funcaoConstrutora.prototype
    funcaoConstrutora.apply(objetoNovo, parametros)
    return objetoNovo
}

const aulaCriadaComFuncaoNovo = novo(Aula, 'Aula 2')
console.log(aulaCriadaComFuncaoNovo)
