const car1 = prompt('Informe o nome do primeiro veículo:')
const speed1 = Number(prompt('Informe a velocidade do primeiro veículo:'))

const car2 = prompt('Informe o nome do segundo veículo:')
const speed2 = Number(prompt('Informe a velocidade do segundo veículo:'))

if (speed1 > speed2) {
  alert(car1 + ' é mais rápido do que ' + car2)
} else if (speed2 > speed1) {
  alert(car2 + ' é mais rápido do que ' + car1)
} else {
  alert(car1 + ' e ' + car2 + ' possuem velocidades iguais  ')
}