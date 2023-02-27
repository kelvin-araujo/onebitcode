const cheap = []
let option = ''

do { 
  option = prompt(
    'Cartas no baralho = ' + cheap.length +
    '\n1. Adicionar uma carta' +
    '\n2. Puxar uma carta' +
    '\n3. Sair'
  )

  switch(option) {
    case '1':
      const newCheap = prompt('Qual é a carta?')
      cheap.push(newCheap)
      break
    case '2':
      const pullCard = cheap.pop()
      if (!pullCard) {
        alert('Não há nenhuma carta no baralho!')
      } else {
        alert('Você puxou um(a) ' + pullCard)
      }
      break
    case '3':
      alert('Saindo...')
      break
    default:
      alert('Opção inválida')
  }
} while (option !== '3')