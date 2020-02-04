const pessoa = {}

const fabricarPessoa = (nome, sobrenome) => {
    pessoa.nome = nome
    pessoa.sobrenome = sobrenome
    return pessoa
}

module.exports = {
    fabricarPessoa
}
