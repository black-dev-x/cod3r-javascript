class Pokemon {

    constructor(nome, tipo){
        this.nome = nome
        this.tipo = tipo
        this.vida = 2
    }

    atacar(outroPokemon){
        console.log(`O pokemon ${this.nome} atacou ${outroPokemon.nome}`)
        if(this.tipo == 'agua' && outroPokemon.tipo == 'fogo'){
            console.log('Ataque super efetivo, 2 de dano! WOW!!!')
            outroPokemon.vida -= 2
        } else {
            console.log('Deu 1 de dano')
            outroPokemon.vida--
        }
    }
}
//aqui eu voltei a classe em si
module.exports = Pokemon