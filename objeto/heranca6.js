function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//simulando o new
function novo(funcaoConstrutora, ...parametros){
    const objetoNovo = {}
    objetoNovo.__proto__ = funcaoConstrutora.prototype
    funcaoConstrutora.apply(objetoNovo, parametros)
    return objetoNovo
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)