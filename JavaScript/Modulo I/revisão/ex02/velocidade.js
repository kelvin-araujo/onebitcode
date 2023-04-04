confirm('Bem-vindo(a) ao teste de velocidade entre veículos!')

const nameOne = prompt('Informe o nome do primeiro carro:')
const nameTwo = prompt('Informe o nome do segundo carro:')
const speedOne = Number(prompt('Informe a velocidade do primeiro veículo:'))
const speedTwo = Number(prompt('Informe a velocidade do segundo veículo:'))

if (speedOne > speedTwo) {
  alert(nameOne + ' é mais rápido que ' + nameTwo)
} else if (speedTwo > speedOne) {
  alert(nameTwo + ' é mais rápido que ' + nameOne)
} else {
  alert('A velocidade dos dois veículos é igual!')
}