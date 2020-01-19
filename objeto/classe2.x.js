class Pessoa1 {
    constructor(nome){
        this.nome = nome
    }
    dizOi(){
        console.log('oi')
    }
}
function Pessoa2(nome){
    this.nome = nome
    this.dizOi = function(){
        console.log('oi')
    }
}

let pessoa1 = new Pessoa1('ysa')
pessoa1.dizOi()
let pessoa2 = new Pessoa2('rot')
pessoa2.dizOi()
/////

class Animal {
    constructor(especie){
        this.especie = especie
    }
    comer(){
        console.log('O animal esta comendo')
    }
    respirar(){
        console.log('O animal esta respirando')
    }
}

class Galinha extends Animal {
    constructor(nome){
        super('Galinha')
        this.nome = nome
    }
    apresentar(){
        console.log(`Eu sou a ${this.especie} ${this.nome}`)
    }
}
const galinha = new Galinha('Pintadinha')
galinha.comer()
galinha.respirar()
galinha.apresentar()

///

class Cliente{
    constructor(nome, documento){
        this.nome = nome
        this.documento = documento
    }
    pagar(){
        //imagina um método bem complicado aqui!!!
        console.log('pronto pagou!')
    }
}

class ClienteFisico extends Cliente {
    constructor(nome, cpf){
        validarCPF(cpf)
        super(nome, cpf)
    }
    validarCPF(){
        //imagina um método que valida o CPF, não precisa em um cliente juridico né
        //se o documento tiver erro, ele cancela por exemplo a criação do cliente
    }
}

class ClienteJuridico extends Cliente {
    constructor(nome, cnpj){
        validarCNPJ(cnpj)
        super(nome, cnpj)
    }
    validarCNPJ(){
        //Mesma regra que eu expliquei no cliente fisico, mas agora o que vale é o CNPJ
    }
}

////////////////

class Brinquedo{
    constructor(tipo){
        this.tipo = tipo
    }
    descricao(){
        console.log(`O brinquedo é do tipo ${this.tipo}`)
    }
}

class Bola extends Brinquedo{
    constructor(){
        super('Bola')
    }
}

class Bolinha extends Bola{
    constructor(){
        super()
    }
}
const bolinha = new Bolinha()
bolinha.descricao()