function tag(partes, ...valores) {
    console.log(partes) //[ '', ' esta ', '' ]
    console.log(valores) //[ 'Gui', 'Aprovado' ]
}

const a = "primeira"
const b = "segunda"
const c = "terceira"

tag `para exemplo, temos a ${a} parte, a ${b} parte e a ${c} parte!`


// partes[0] == 'para exemplo, temos a '
// partes[1] == ' parte, a '
// partes[2] == ' parte e a '
// partes[3] == ' parte!'

// valores[0] == 'primeira'
// valores[1] == 'segunda'
// valores[2] == 'terceira'

//para obter a tagged template basta fazer
//partes[0] + valores[0] + partes[1] + valores[1] + partes[2] + valores[2] + partes[3]