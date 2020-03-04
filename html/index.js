const clicarNoLink = evento => {
    evento.preventDefault() //não permite redirecionar
    const conteudo = document.querySelector('#conteudo')
    const link = evento.target //o alvo do evento é o link, a tag 'a'
    const href = link.href //href é a propriedade que fala onde esta o arquivo
    fetch(href).then(resposta => resposta.text()).then(html => conteudo.innerHTML = html)
    //esse código acima, não se preocupe tanto com ele, se um dia vc tiver que fazer na mão
    //vai ser dessa forma, mas já existem formas mais fáceis (como sempre)
}

const listaDeLinks = document.querySelectorAll('.cabecalho .navegacao a')
listaDeLinks.forEach(link => {
    link.onclick = clicarNoLink
})