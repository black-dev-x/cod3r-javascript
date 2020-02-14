const taric = {
    nome: 'Taric',
    melhorTaric: 'Taillos',
    situacao: 'Inútil'
}
console.log(Object.values(taric)) //[ 'Taric', 'Taillos', 'Inútil' ]
console.log(Object.keys(taric))  //[ 'nome', 'melhorTaric', 'situacao' ]
console.log(Object.entries(taric)) //[ [ 'nome', 'Taric' ],[ 'melhorTaric', 'Taillos' ],[ 'situacao', 'Inútil' ] ]

class Animal {
    respira(){
        console.log('Estou respirando')
    }
}
class Ave extends Animal {
    voa(){
        console.log('Estou voando')
    }
}
class Galinha extends Ave {
    voa(){
        console.log('Não sei mais voar =(')
    }
    ciscar(){
        console.log('Estou ciscando')
    }
}
class Ysa extends Galinha {
    ciscar(){
        console.log('Estou comendo miojo =)')
    }
}
const ysa = new Ysa()
ysa.voa()
ysa.ciscar()
