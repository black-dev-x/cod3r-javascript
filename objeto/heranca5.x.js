const array = [1,2,3,4,5,6,7]
const objeto = {}
const texto = "Ola"

Array.prototype.colocaUmOvo = function(){
    this.push('ovo')
}

Object.prototype.colocaUmaJaca = function(){
    this.jaca = true
}

String.prototype.retornaUmElefante = function(){
    return "Elefante Azul"
}
array.colocaUmOvo()
objeto.colocaUmaJaca()

const elefante = texto.retornaUmElefante()

console.log(array)
console.log(objeto)
console.log(elefante)