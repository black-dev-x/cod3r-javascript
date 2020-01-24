Array.prototype.filtro = function(callback){
    const novoArray = []
    for(let i =0; i < this.length; i++){
        const valorDoArray = this[i]
        const resultadoDaCallback = callback(valorDoArray)
        if(resultadoDaCallback){
            novoArray.push(valorDoArray)
        }
    }
    return novoArray
}

const numeros = []
for(let i = 0; i <= 100; i++){
    numeros.push(i)
}

const numeroEhPar = numero => numero % 2 == 0
const numeroEhImpar = numero => numero % 2 != 0

const numerosPares = numeros.filtro(numeroEhPar)
const numerosImpares = numeros.filtro(numeroEhImpar)
console.log(numerosPares)
console.log(numerosImpares)

