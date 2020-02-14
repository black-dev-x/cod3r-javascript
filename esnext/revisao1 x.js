const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7]
const arrayDeArtistas = ['Cold Play', 'Katy Perry', 'Lady Gaga', 'Beyoncê']
const textoInspirador = `Beyoncê não é artista`

const [numero1, numero2] = arrayDeNumeros
const [coldplay, ...artistasEsquizofrenicos] = arrayDeArtistas
const [b,e,y,o,n,c,outroE, espaco, ...fraseDoLysk] = textoInspirador

console.log(fraseDoLysk) //perceba que isso é um array
console.log(`${b} é a primeira letra do textoInspirador`)

const objeto = {
    nome: 'Ysarot',
    tipo: 'Ave',
    reino: 'Animal',
    asas: 2,
    fraseDeEfeito: 'Seu cú!',
    dizFraseDeEfeito(){
        console.log(`${this.nome} diz: ${this.fraseDeEfeito}`)
    }
}
objeto.dizFraseDeEfeito()
// você pode fazer o seguinte:
console.log(objeto.nome) //isso imprime o nome.

const nome1 = objeto.nome
console.log(nome1) //isso também imprime o nome, só que temos outra variável apontando para o nome agora

const {nome: nome2} = objeto
console.log(nome2) //fica um pouco mais verboxo, mas você pode extrair variáveis dos objetos dessa forma, podem ser varias variáveis

const {nome, tipo, reino, asas: numeroDeAsas} = objeto
//agora eu tenho 4 novas variáveis, uma chamada nome, outra tipo, outra reino e outra numeroDeAsas


const coisasMalignas = [
    {nome:'Jaca'},
    {nome:'Tomate'},
    {nome:'Vaca'},
    {nome:'Pastel'}
]

const [maligna, malignidadeAbsoluta, ...outrasCoisasMalignas] = coisasMalignas
const {nome:demonioNaTerra} = malignidadeAbsoluta
console.log(demonioNaTerra)