let option = ''

do {
  option = prompt (
    'Escolha uma das opções:' +
    '\n 1 - Opção Um' +
    '\n 2 - Opção Dois' +
    '\n 3 - Opção Três' +
    '\n 4 - Opção Quatro' +
    '\n 5 - Encerrar' 
  )
  switch(option) {
    case '1':
      alert('Você escolheu a opção 1.')
      break
    case '2':
      alert('Você escolheu a opção 2.')
      break
    case '3':
      alert('Você escolheu a opção 3.')
      break
    case '4':
      alert('Você escolheu a opção 4.')
      break
    case '5':
      alert('Você escolheu encerrar.')
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida')
  }
  
} while (option !== '5')



