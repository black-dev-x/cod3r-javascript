const alunos = [
    {nome: 'João', nota:7.3, bolsista:false},
    {nome: 'Maria', nota:9.2, bolsista:true},
    {nome: 'Pedro', nota:1, bolsista:false},
    {nome: 'Amorvânia', nota:1.7, bolsista:true},
    {nome: 'Baixinhovisk', nota:10.0, bolsista:true},
    {nome: 'Coralina', nota:9.7, bolsista:true},
    {nome: 'Dêmon', nota:6.7, bolsista:true},
    {nome: 'Esperalina', nota:5.3, bolsista:true},
    {nome: 'Felicia', nota:4.2, bolsista:true},
    {nome: 'Gandolf', nota:3.8, bolsista:true},
    {nome: 'Hudsônia', nota:8.2, bolsista:true},
    {nome: 'Isadorysa', nota:9.9, bolsista:true},
    {nome: 'Jacânia', nota:3.2, bolsista:true},
]

//primeiro vamos facilitar nossa vida, quer mecher apenas com atributo de notas por exemplo?
const arrayDeNotas = alunos.map(aluno => aluno.nota)
const somaDasNotas = arrayDeNotas.reduce((acumulador, nota) => acumulador + nota, 0) //esse 0 é o valor inicial do acumulador.
//perceba que o acumulador então faz sentido ser um número, pois você esta mechendo com números

//agora array de bolsistas, vira um array de booleans, apenas verdadeiro e false
//o acumulador então, faz sentido ele ser um boolean neh?
const arrayDeBolsistas = alunos.map(aluno => aluno.bolsista)
const possuiApenasBolsistas = arrayDeBolsistas.reduce( (acumulador, bolsista) => acumulador && bolsista, true)
//Agora a parte difícil do método acima, vamos começar com o acumulador como true, pois qualquer valor de false
//significa que o array não possui apenas bolsistas. então assim que ele encontrar um false && true, vai devolver false
console.log(possuiApenasBolsistas)

