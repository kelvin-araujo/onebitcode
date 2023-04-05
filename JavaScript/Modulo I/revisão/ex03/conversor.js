const medida = Number(prompt('Informe uma medida em metros:'))
const unidades = Number(prompt(
  'Escolha a unidade de medida que você deseja converter o número' +
  '\n 1. Milimetros (mm)' +
  '\n 2. Centímetros (cm)' +
  '\n 3. Decímetro  (dm)' +
  '\n 4. Decâmetro  (dam)' +
  '\n 5. Hectômetro  (hm)' +
  '\n 6. Quilômetro  (km)' 
))

switch(unidades) {
  case 1:
    alert('Resultado: ' + medida + 'm= ' + medida * 1000 + 'mm')
    break
  case 2:
    alert('Resultado: ' + medida + 'm= ' + medida * 100 + 'cm')
    break    
  case 3:
    alert('Resultado: ' + medida + 'm= ' + medida * 10 + 'dm')
    break
  case 4:
    alert('Resultado: ' + medida + 'm= ' + medida / 10 + 'dam')
    break
  case 5:
    alert('Resultado: ' + medida + 'm= ' + medida / 100 + 'hm')
    break
  case 6:
    alert('Resultado: ' + medida + 'm= ' + medida / 1000 + 'km')
    break
  default:
    alert('[ERRO] Opção Inválida')
    break
}