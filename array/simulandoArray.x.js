class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    toString(){
        return `Nome Completo:${this.nome} ${this.sobrenome}`
    }
}
const ysarot = new Pessoa('Ysa','Rot')
console.log(ysarot.toString())