const measure = Number(prompt('Insira uma medida em metros'))
const unit = Number(prompt (
  'Escolha a unidade de medida que você deseja converter o número' +
  '\n 1. Milimetros (mm)' +
  '\n 2. Centímetros (cm)' +
  '\n 3. Decímetro  (dm)' +
  '\n 4. Decâmetro  (dam)' +
  '\n 5. Hectômetro  (hm)' +
  '\n 6. Quilômetro  (km)' 
  )
)
  switch (unit) {
    case 1:
      alert('Resultado: ' + measure + 'm= ' + measure * 1000 + 'mm')
      break
    case 2:
      alert('Resultado: ' + measure + 'm = ' + measure * 100 + 'cm')
      break
    case 3:
      alert('Resultado: ' + measure + 'm = ' + measure * 10 + 'dm')
      break
    case 4:
      alert('Resultado: ' + measure + 'm = ' + measure / 10 + 'dam')
      break
    case 5:
      alert('Resultado: ' + measure + 'm = ' + measure / 100 + 'hm')
      break
    case 6:
      alert('Resultado: ' + measure + 'm = ' + measure / 1000 + 'km')
      break
    default:
      alert('Opção Inválida!')
  }