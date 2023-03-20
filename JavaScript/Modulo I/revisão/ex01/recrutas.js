confirm(
  "Bem-vindo(a) ao cadastro de recrutas!" +
  "\nPreencha os dados a seguir para completar seu cadastro"
)

let nome = prompt("Informe seu nome:")
let sobrenome = prompt("Informe seu sobrenome:")
let estudo = prompt("Informe seu campo de estudo:")
let nascimento = Number(prompt("Informe o ano do seu nascimento:"))


const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()
const idade = anoAtual - nascimento


alert(
  "Cadastro realizado com sucesso!" +
  "\nNome completo: " + nome + " " + sobrenome +
  "\nCampo de estudo: " + estudo +
  "\nIdade: " + idade
)
