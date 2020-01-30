const jacas = [
    {nome:'Ysa', nacionalidade:'Bahia'},
    {nome:'Aaron', nacionalidade:'India'},
    {nome:'Taillos', nacionalidade:'Japamexican'},
    {nome:'João', nacionalidade:'Brasil'},
    {nome:'Maria', nacionalidade:'Brasil'},
    {nome:'Esquizofrênia', nacionalidade:'Brasil'},
    {nome:'Lysk', nacionalidade:'UNKNOWN'},
    {nome:'Beyonce', nacionalidade:'Lysk'},
    {nome:'Galinha Pintadinha', nacionalidade:'Bahia'},
]
//obtendo as pessoas da Bahia de forma imperativa
const jacasDaBahia = []
for(let i = 0; i < jacas.length; i++){
    if(jacas[i].nacionalidade == 'Bahia'){
        jacasDaBahia.push(jacas[i])
    }
}
console.log(jacasDaBahia)
//obtendo as jacas da Bahia de forma declarativa
const jacasDaBahia2 = jacas.filter(jaca => jaca.nacionalidade == 'Bahia') 
console.log(jacasDaBahia2)