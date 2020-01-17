//O que é importante saber dessa aula? Até o momento nada
//não precisa decorar isso, com o tempo fica mais fácil de entender prototype
//mas o inicio é confuso
function Vaca(){
    this.numeroDePatas = 4
    this.comedoraDePlastico = true
    this.mugir = () => console.log('Muuuu')
}

let vaca = new Vaca()
console.log(vaca.__proto__ === Vaca.prototype) //o pai da vaca, é a Vaca.prototype
console.log(vaca.__proto__.__proto__ == Object.prototype) //o pai da vaca prototype, é o Object.prototype

//não falei que herança em javascript é uma merda?