let campeoes = require('lol-champions')
//se tiver curiosidade, da um console.log(campeoes, vai ver uma lista gigante)
const removerDoLol = campeaoParaRemover => {
    campeoes = campeoes.filter(campeao => campeao.name != campeaoParaRemover)
    console.log(`-------------
Removi o ${campeaoParaRemover} do lol
graças a deus
-------------`)
}

const quantosCampeoes = () => console.log(`Lol possui ${campeoes.length} campeões`)

module.exports = {
    removerDoLol,
    quantosCampeoes
}

