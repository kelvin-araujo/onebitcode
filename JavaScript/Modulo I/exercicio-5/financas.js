let balance = Number(prompt('Informe a quantidade de dinheiro inicial:'))
let option = ''

do {
  option = prompt(
    'Saldo disponível: R$ ' + balance +
    '\n 1. Adicionar dinheiro' +
    '\n 2. Remover dinheiro' +
    '\n 3. Sair'
  )

  switch(option) {
    case '1':
      balance += Number(prompt('Informe o valor que você deseja adicionar:'))
      break
    case '2':
      balance -= Number(prompt('Informe o valor que você deseja remover:'))
      break
    case '3':
      alert('Saindo...')
      break
    default:
      alert('Entrada inválida!')
  }
} while (option !== '3')