let properties = []
let option = ''

do {
  option = prompt(
    'Bem-vindo(a) ao Cadastro de Imóveis!\n' +
    'Total de Imóveis: ' + properties.length +
    '\n\n Escolha uma opção:\n1. Novo Imóvel \n2. Listar Imóveis\n3. Sair' 
  )

  switch(option) {
    case '1':
      const immobile = {}

      immobile.owner = prompt('Informe o nome do proprietário do imóvel:')
      immobile.room = prompt('Quantos quartos possui o imóvel?')
      immobile.bathroom = prompt('Quantos banheiros possui o imóvel?')
      immobile.garage = prompt('O imóvel possui garagem? (Sim/Não)')

      const confirmation = confirm(
        'Salvar este imóvel?\n' +
        '\nProprietário: ' + immobile.owner +
        '\nQuartos: ' + immobile.room +
        '\nBanheiros: ' + immobile.bathroom +
        '\nPossui garagem? ' + immobile.garage
      )

      if (confirmation) {
        properties.push(immobile)
        alert('Imóvel salvo com sucesso!')
      } else {
        alert('Voltando ao menu.')
      }

      break
    case '2':
      for ( let i = 0; i < properties.length; i++) {
        alert (
          'Imóvel ' + (i + 1) + 
          '\nPropietário: ' + properties[i].owner + 
          '\nQuartos: ' + properties[i].room +
          '\nBanheiros: ' + properties[i].bathroom +
          '\nGaragem? ' + properties[i].garage
        )
      }
      break
    case '3':
      alert('Encerrando...')
      break
    default:
      alert('Opção Inválida!')
      break
  }
}
while (option !== '3' ) 