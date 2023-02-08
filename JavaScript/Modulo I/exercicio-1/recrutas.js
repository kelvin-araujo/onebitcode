const nome = prompt('Informe o nome do recruta:')
const sobrenome = prompt('Informe o sobrenome do recruta:')
const estudo = prompt('Qual é o campo de estudo do recruta?')
const ano = prompt('Qual o ano do nascimento do recruta?')
const idade = 2023 - (ano)

alert(
  ' Cadastro realizado com sucesso! \n' +
  '\n Nome completo: ' + nome + '' + sobrenome + 
  '\n Campo de estudo: ' + estudo +
  '\n Idade: ' + idade 
)