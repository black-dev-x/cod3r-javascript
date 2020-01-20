let objeto = {}
let array = []

array[0] = 'Ysa'
//lembra que podemos acessar chaves de objetos com [ também? ]
objeto["nome"] = 'Ysa'
objeto.idade = 3
objeto[0] = "funciona também"
console.log(objeto)

const nomes = []
nomes.push('Cloud')
nomes.push('Sephirot', 'Squall')
console.log(nomes)
//Aqui na posição 0 temos Cloud, 1 Sephirot e 2 Squall
const nomeRemovido = nomes.pop()
console.log(nomeRemovido)
//pop remove o ultimo elemento do array
console.log("==============================")


const letras = ['a','b','c','d','e','f','g']
const indiceInicial = 3 //indice da letra d
const quantosElementosVouApagar = 2
letras.splice(indiceInicial, quantosElementosVouApagar)
//ou seja, da letra d vou apagar dois elementos
console.log(letras)

//////
const animais = ['Ave', 'Bezerro', 'Banana', 'Aaron', 'Preguiça', 'Macaco']
const animalSolitario = 'Lobo'
const animalChato = 'Galinha'
//supondo que você queira arrumar o array acima
//o erro esta na posição 2, certo?
//então o primeiro parâmetro do splice é o indice que você quer alterar
//o número de elementos que você quer remover? Apenas 1, apenas banana esta errado
//obviamente
//e posteriormente você quer adicionar o animalSolitario e o animalChato 
animais.splice(2, 1, animalSolitario, animalChato)
console.log(animais)
//Ave Bezerro Lobo Galinha Aaron Preguiça Macaco
console.log("---------------------------")
let filaDoBanco = []
filaDoBanco.push('pessoa1')
filaDoBanco.push('pessoa2')
filaDoBanco.push('pessoa3', 'pessoa4')
let velhinha = 'velhinha de 150 anos de idade'
filaDoBanco.splice(0, 0, velhinha)
let pessoaQueDesistiuDaFila = filaDoBanco.pop()

filaDoBanco.sort()
console.log(filaDoBanco)







