let usuario = 'root'
let senha = 'root'
let numeroDeTentativas = 0

this.logar = (login, password) => {
    if(numeroDeTentativas == 3){
        console.log('Você não pode mais logar no sistema, tentou senhas erradas demais caralho')
        return;
    }
    if(login == usuario && password == senha){
        console.log('Parabens você conseguiu logar no sistema')
    } else {
        console.log('Usuário e senha inválidos')
        numeroDeTentativas++;
    }
}