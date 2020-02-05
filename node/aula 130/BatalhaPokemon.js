const luta = (pokemon1, pokemon2) => {
    pokemon1.atacar(pokemon2)
    pokemon2.atacar(pokemon1)
}
//aqui eu preferi voltar um objeto
module.exports = {
    luta
}