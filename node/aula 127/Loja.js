let riotPoints = 0;

const comprarRP = (totalComprado) => riotPoints += totalComprado

const gastarRP = (gasto) => {
    if(gasto > riotPoints) console.log('Por favor adicione mais créditos')
    else riotPoints -= gasto
}
//Não faz sentido a loja mudar não é mesmo? É bom ela ser única para a pessoa.
module.exports = {
    comprarRP,
    gastarRP
}