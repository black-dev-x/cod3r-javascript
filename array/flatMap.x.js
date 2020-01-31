const escola = [
    {nome: 'Turma M1',
    alunos: [
        {
        nome: 'Gustavo',
        nota: 8.1
        },
        {
        nome: 'Ana',
        nota: 9.3
        }
    ]},
    {nome: 'Turma M2',
    alunos: [
        {
        nome: 'Rebeca',
        nota: 8.9
        },
        {
        nome: 'Roberto',
        nota: 7.3
        }
    ]
}]
//Podemos primeiro juntar todos os alunos em um único array
const resultado1 = escola.reduce( (acumulador, turma) => acumulador.concat(turma.alunos) , [])
const resultado2 = resultado1.map(aluno => aluno.nota)
console.log(resultado2)

