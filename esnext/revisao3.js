const obj = { a:1, b:2, c:3 }
console.log(Object.values(obj)) //[ 1, 2, 3 ]
console.log(Object.keys(obj)) //[ 'a', 'b', 'c' ]
console.log(Object.entries(obj)) //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        console.log(`Ola meu nome é ${this.nome}`)
    }
}
pessoa.ola()

class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'Au au!'
    }
}