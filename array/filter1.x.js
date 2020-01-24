const pessoas = [
    {nome: 'Lysk',chato: true,origem: 'acre'},
    {nome: 'Ysa',chato: true,origem: 'bahia'},
    {nome: 'Devar',chato: false,origem: 'inferno'},
    {nome: 'Aaron',chato: true, chatissimo: true, origem: 'vitoria'},
    {nome: 'Beyonce',chato: true,origem: 'desconhecido'},
    {nome: 'João',chato: true,origem: 'rio'},
    {nome: 'Maria',chato: true,origem: 'rio'},
    {nome: 'José',chato: false,origem: 'rio'},
    {nome: 'Galinha',chato: true,origem: 'bahia'},
    {nome: 'Lalael',chato: true,origem: 'rio'},
    {nome: 'Vardamir',chato: false,origem: 'rio'},
    {nome: 'Taillos',chato: true,origem: 'shakespeare'}
]
//funções para usar no filter
const ehDoRio = pessoa => pessoa.rio == 'rio'
const ehChata = pessoa => pessoa.chato
const naoEhChata = pessoa => !pessoa.chato
const ehDaBahia = pessoa => pessoa.origem == 'bahia'
//função para usar no map
const transformaPessoaEmNome = pessoa => pessoa.nome
//exemplos de como usar filter e inclusive map
const pessoasDaBahiaEChatas = pessoas.filter(ehChata).filter(ehDaBahia)
const pessoasDoRioENaoChatas = pessoas.filter(naoEhChata).filter(ehDoRio)
const nomesDasPessoasChatas = pessoas.filter(ehChata).map(transformaPessoaEmNome)

console.log(pessoasDaBahiaEChatas)
console.log(pessoasDoRioENaoChatas)
console.log(nomesDasPessoasChatas)