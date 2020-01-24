const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const produtosFrageis = produto => produto.fragil
const precoMaiorQue500 = produto => produto.preco >= 500

const produtosFrageisECaros = produtos.filter(produtosFrageis).filter(precoMaiorQue500)
