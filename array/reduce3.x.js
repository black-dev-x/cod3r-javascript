const arrayDeContas= [
    {numero:12412412, banco:'Satãder', saldo:32402.02},
    {numero:12523634, banco:'Banco do Brasil', saldo:301.23},
    {numero:46134623, banco:'Caixa', saldo:150.43},
    {numero:74534574, banco:'Satãder', saldo:-13.00},
    {numero:35465745, banco:'Satãder', saldo:-120000.13},
    {numero:32654374, banco:'Nubank', saldo:50.00},
    {numero:32526345, banco:'Bradescu', saldo:1000.45},
    {numero:23426432, banco:'Satãder', saldo:1.99},
]

//três formas de se obter o total de dinheiro nessas contas de bancos
const arrayDeSaldo = arrayDeContas.map(conta => conta.saldo)
const totalDeSaldo1 = arrayDeSaldo.reduce( (total, saldo) => total + saldo)

//forma 2, usando o reduce diretamente, se você não usar o 0 no final, vai dar um resultado meio estranho
//pois ele vai pensar que o acumulador (ou total no caso) é um objeto e não um número, teste
//é boa prática inicializar o acumulador para evitar problemas do tipo
const totalDeSaldo2 = arrayDeContas.reduce( (total, conta) => total + conta.saldo, 0)
const totalDeSaldo3 = arrayDeContas.reduce( (total, conta) => total + conta.saldo)

console.log(totalDeSaldo1)
console.log(totalDeSaldo2)
console.log(totalDeSaldo3) //esse vai dar bem errado
