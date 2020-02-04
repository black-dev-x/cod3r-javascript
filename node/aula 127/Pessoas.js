//você quer aproveitar a lista de pessoas em qualquer lugar
const listaDePessoas = []

const adicionarPessoa = pessoa => listaDePessoas.push(pessoa)
const listarPessoas = () => listaDePessoas.forEach(pessoa => console.log(pessoa))

module.exports = {
    adicionarPessoa,
    listarPessoas
}