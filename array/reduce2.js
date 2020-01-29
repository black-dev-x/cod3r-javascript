const alunos = [
    {nome: 'João', nota:7.3, bolsista:false},
    {nome: 'Maria', nota:9.2, bolsista:true},
    {nome: 'Pedro', nota:9.8, bolsista:false},
    {nome: 'Ana', nota:8.7, bolsista:true},
]

const todosOsAlunosSaoBolsistas = alunos.reduce( (acumulador, aluno)=> {
    return acumulador && aluno.bolsista
}, true)
console.log(todosOsAlunosSaoBolsistas)

const algumAlunoEhBolsita = alunos.reduce( (acumulador, aluno)=>{
    return acumulador || aluno.bolsista
}, false)
console.log(algumAlunoEhBolsita)
const texto = "nome"
texto.length
console.log(texto.length)