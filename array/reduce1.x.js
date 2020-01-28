const demonios = [
    {nome: 'Taillos', vitorias: 2000, bonzinho:true},
    {nome: 'Ysa', vitorias:3, bonzinho:false},
    {nome: 'Dehzitto', vitorias:1200, bonzinho:false},
    {nome: 'Aaron', vitorias:2100, bonzinho:false},
    {nome: 'Baboo', vitorias:4000, bonzinho:false},
    {nome: 'Rodrigues', vitorias:50, bonzinho:false},
    {nome: 'Lalael', vitorias:512, bonzinho:false},
    {nome: 'Devar', vitorias:666, bonzinho:false},
    {nome: 'Yuuichi', vitorias:-30, bonzinho:false},
    {nome: 'Kaito', vitorias:35000, bonzinho:false},
    {nome: 'Lsyk', vitorias:2, bonzinho:false},
    {nome: 'Beyonce', vitorias:0, bonzinho:false},
    {nome: 'Katy Perry', vitorias:-1000, bonzinho:false},
    {nome: 'Lady', vitorias:2, bonzinho:false},
    {nome: 'Gaga', vitorias:2, bonzinho:false},
]

const arrayDeVitorias = demonios.map(demonio => demonio.vitorias)
const tamanhoDoArrayDeVitorias = arrayDeVitorias.length
const totalDeVitorias = arrayDeVitorias.reduce( (total, vitoria) => total + vitoria)

const mediaDeVitorias = totalDeVitorias/tamanhoDoArrayDeVitorias
console.log(mediaDeVitorias)

const esquizofrenia = demonios.reduce( (acumulador, valorAtual) => {
    acumulador.push(valorAtual.nome)
    return acumulador
},[])
console.log(esquizofrenia)
