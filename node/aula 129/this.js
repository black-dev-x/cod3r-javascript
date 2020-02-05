//resultados falsos
console.log(this === global)
console.log(this === module)

//resultados verdadeiros
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
    //dentro de uma função, o valor de this é o global ( a menos que seja uma arrow function)
}

logThis()