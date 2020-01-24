let numeros = []
for(let i = 0; i < 100; i++){
    numeros.push(i);
}

numeros
    .map(numero => numero*numero)
    .filter(numero => numero >= 100)
    .filter(numero => numero <= 1000)
    .map( (numero, indice) => `${indice}:${numero}`)
    .forEach(numero => console.log(numero))