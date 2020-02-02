const galinhas = []

exports.adicionarGalinhaNoGalinheiro = (galinha) => galinhas.push(galinha)
exports.quaisGalinhasPossuoNoGalinheiro = () => galinhas.forEach(galinha => console.log(galinha))
