const letrinhas = ['A de amor', 'B de baixinho', 'C de cadela previsível']

//for normal, é o mais utilizado pois programadores antigos só conhecem esse
for(let i = 0; i < letrinhas.length; i++){
    console.log(`Nesse for temos o indice ${i} e o valor é ${letrinhas[i]}`)
}

//for in, é o menos utilizado...
for (let i in letrinhas) {
    console.log(`Temos também o indice ${i} aqui nesse for... e ${letrinhas[i]}`)
}

//mas por razões simples, geralmente não nos importamos com o índice
letrinhas.forEach(valor => console.log(`Aqui o primeiro parâmetro é o valor ${valor}`))
letrinhas.forEach((valor, indice) => console.log(`Se quiser tem o ${indice} e o ${valor}`))

//e então inventaram o for of
for (let valor of letrinhas) {
    console.log(`Muito parecido com o foreach, você consegue o ${valor}`)
}

const objetoC = {nome:'C', descricao:'Cadela Previsível'}

for(let chave in objetoC){
    console.log(`O for in pode ser obtido para se adquirir a chave ${chave}
    MAS se quiser o valor da chave, basta fazer ${objetoC[chave]}`)
}

