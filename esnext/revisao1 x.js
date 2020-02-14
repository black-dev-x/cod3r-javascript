{ 
    var aaron = 'Essa variável é tão chata que ela existe fora do escopo do bloco'
    let lysk = 'Essa variável aqui esta aprisionada pelo bloco' //funcionaria também se fosse const lysk da mesma forma
    console.log(lysk)
}
//lysk não existe aqui fora
console.log(aaron) //mas aaron existe