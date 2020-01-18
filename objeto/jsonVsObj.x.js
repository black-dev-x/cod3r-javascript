//exemplo, você esta criando uma loja e o seu cliente digita o cep
//você pode terminar de preencher para seu cliente os dados do endereço
//acesse o endereço viacep.com.br/ws/01001000/json/
//veja que o retorno é um texto
const textoRetornadoDoCep01001000 = `{
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "complemento": "lado ímpar",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP",
    "unidade": "",
    "ibge": "3550308",
    "gia": "1004"
  }`
  const endereco = JSON.parse(textoRetornadoDoCep01001000)
  console.log(`O endereço do cep ${endereco.cep} fica em ${endereco.localidade}/${endereco.uf}`)
  //acessar alguma coisa direto do texto não funciona, pois o JSON é simplesmente um texto
  console.log(textoRetornadoDoCep01001000.cep) 
  //cep no caso é undefined, pois o texto não tem esse atributo
  //pode inclusive ter uma exceção dependendo do que você tentar acessar

  let texto = "{}"
  let objeto = JSON.parse(texto)
  objeto.idade = 0
  objeto.gritar = () => console.log("Eu sou um objeto de idade " + this.idade)
  objeto = JSON.stringify(objeto)
  console.log(objeto.idade)
  objeto.gritar()
