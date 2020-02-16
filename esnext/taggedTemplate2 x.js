const real = (partes, ...valores) => {
    let resultado = ""
    partes.forEach( (parte, indice) => {
        resultado += parte;
        if(valores[indice]){ //se existir ainda valores nesse indice, soma os valores, caso contrário não soma =)
            resultado += valores[indice]
        }
    })
    return resultado;
}

const converteNumeroEmReal = valor => isNaN(valor) ? valor : `R${valor.toFixed(2)}`

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}, esse texto não sumiu mais!`)