class Pessoa {
    constructor(nome, sobrenome, idade, telefone){
        this.nome = nome;
        this.sobrenome = sobrenome; 
        this.idade = idade;
        this.telefone = telefone;
        this.numeroAleatorio = Math.random()
    }
}
const ysa = new Pessoa('Ysa', 'Poporot', 3, 98958984)
const joao = new Pessoa('João', 'Albuquerque', 27, 98249567)
const florence = new Pessoa('Florence', 'And The Machine', 40, 958869349)
const madona = new Pessoa('Madona', 'The mummy', 2039, 666)
const beyonce = new Pessoa('Beyonce', 'Lyskinia', null, null)
const pessoas = []
pessoas.push(ysa, joao, florence, madona, beyonce)

const novasPessoas = pessoas.map(pessoa => `${pessoa.nome} ${pessoa.sobrenome}`)
console.log(novasPessoas)