let usuario = 'admin'
let senha = 'admin'

this.logar = (login, password) => {
    if(login == usuario && password == senha){
        console.log('Parabens você conseguiu logar no sistema')
    } else {
        console.log('Usuário e senha inválidos')
    }
}