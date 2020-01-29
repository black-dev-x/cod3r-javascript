Array.prototype.reduce2 = function(callback, valorInicial){
    let indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador;
}

const numeros = [100,1,2,3,4,5,6,7,8,9,10]
console.log(numeros.reduce2( (acumulador, numero) => acumulador + numero))