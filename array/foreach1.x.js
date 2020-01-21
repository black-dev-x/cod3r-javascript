const posicoes = ['Beyonce', 'Katy Perry', 'Lyskonce', 
'Taillos-san', 'Lomeu e Julieta', 'Temtemtemtem',]

posicoes.forEach( (nome, index) => {
    console.log(`Em ${index+1}º lugar, temos ${nome}`)
})

const funcao = (parametro1, parametro2, parametro3) => {
    if(parametro2 == 2){
        console.log(parametro1)
    }
    if(parametro3.length == 5){
        console.log('Finalmente!')
    }
}

const array = ['oi', 'noob', 'como', 'voce', 'esta', 'sua', 'jaca']
array.forEach(funcao)