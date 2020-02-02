const galinheiro = []

exports.adicionarGalinhaNoGalinheiro = (galinha) => galinheiro.push(galinha)
exports.quaisGalinhasPossuoNoGalinheiro = () => galinheiro.forEach(galinha => console.log(galinha))
