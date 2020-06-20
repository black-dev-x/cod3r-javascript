const novoElemento = (nome, classe) => {
  const elemento = document.createElement(nome)
  elemento.className = classe
  return elemento
}
const novoBloco = classe => {
  return novoElemento('div', classe)
}

const adicionarFilhos = (pai, ...filhos) => {
  filhos.forEach(filho => pai.appendChild(filho))
}

const criaBarreira = reversa => {
  const barreira = novoBloco('barreira')
  const borda = novoBloco('borda')
  const corpo = novoBloco('corpo')
  reversa ? adicionarFilhos(barreira, corpo, borda) : adicionarFilhos(barreira, borda, corpo)
  barreira.setAltura = altura => (corpo.style.height = `${altura}px`)
  return barreira
}

const criaParDeBarreiras = (altura, abertura, x) => {
  const parDeBarreiras = novoBloco('par-de-barreiras')
  const barreiraSuperior = criaBarreira(true)
  const barreiraInferior = criaBarreira(false)
  adicionarFilhos(parDeBarreiras, barreiraSuperior, barreiraInferior)
  parDeBarreiras.sortearAbertura = () => {
    const alturaSuperior = Math.random() * (altura - abertura)
    const alturaInferior = altura - abertura - alturaSuperior
    barreiraSuperior.setAltura(alturaSuperior)
    barreiraInferior.setAltura(alturaInferior)
  }
  return parDeBarreiras
}

const barreira = criaBarreira(true)
barreira.setAltura(200)
document.querySelector('[wm-flappy]').appendChild(barreira)
