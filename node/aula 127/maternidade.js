const Pessoas = require('./Pessoas')
const FabricaDePessoa = require('./FabricaDePessoa')

const pessoa1 = FabricaDePessoa.fabricarPessoa('Ysa', 'Rot')
const pessoa2 = FabricaDePessoa.fabricarPessoa('Lysk', 'Ônce')
const pessoa3 = FabricaDePessoa.fabricarPessoa('Taillos', 'Lomeu')
const pessoa4 = FabricaDePessoa.fabricarPessoa('Aaron', 'Vacachata')
const pessoa5 = FabricaDePessoa.fabricarPessoa('Lanael', 'Lalamir')
const pessoa6 = FabricaDePessoa.fabricarPessoa('Sem', 'Criatividade')

Pessoas.adicionarPessoa(pessoa1)
Pessoas.adicionarPessoa(pessoa2)
Pessoas.adicionarPessoa(pessoa3)
Pessoas.adicionarPessoa(pessoa4)
Pessoas.adicionarPessoa(pessoa5)
Pessoas.adicionarPessoa(pessoa6)


//Agora vamos supor que estamos em outra parte do código, bem longe dessa aqui e
//Você quer ver quais pessoas foram adicionadas, pode até ser outro arquivo!!!

const PessoasSalvas = require('./Pessoas')
PessoasSalvas.listarPessoas()