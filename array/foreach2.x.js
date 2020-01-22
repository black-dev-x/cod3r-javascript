const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//o for each recebe uma função, então vamos fazer nossa funcao receber
//uma também, colocamos funcao como parâmetro
Array.prototype.paraCada = function(funcao){
    for(let i = 0; i < this.length; i++){
        funcao(this[i], i)
    }
}

aprovados.paraCada( (valor, posicao) => console.log(`posicao:${posicao} - valor:${valor}`) )

