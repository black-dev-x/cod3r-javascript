const valorAoQuadrado = valor => valor * valor

const promessa = new Promise((deuCerto, deuErrado) => { 
    //deuCerto geralmente é chamada de resolve
    //deuErrado geralmente é chamada de reject
    const resultado = valorAoQuadrado("A")
    const resultadoEhUmNumero = !Number.isNaN(resultado)
    if(resultadoEhUmNumero){
        deuCerto(resultado)
    } else {
        deuErrado("Deu merda")
    }
    
})

promessa.then(resposta => console.log(resposta)).catch(erro => console.log(erro))
