const attacker = prompt('Qual é o nome do personagem atacante?')
const powerAttack = prompt('Qual o poder do atacante? ')

const nameDefender  = prompt('Qual o nome do personagem de defesa?')
let lifeDefender = prompt('Quantos pontos de vida ele possui?')
const powerDefender = prompt('Qual é o seu poder de defesa?')
const shield = prompt('Ele possui um escudo? (Sim/Não)')

let demage = 0

if (powerAttack > powerDefender && shield === 'Não') {
  demage = powerAttack - powerDefender
} else if (powerAttack > powerDefender && shield === 'Sim') {
  demage =  (powerAttack - powerDefender) / 2
} 

lifeDefender -= demage

alert(attacker + ' causou ' + demage + ' pontos de dano em ' + nameDefender + '.')
alert(
  attacker + '\n Poder de ataque: ' + powerAttack + '\n\n' +
  nameDefender + '\n Pontos de vida: ' + lifeDefender +
  '\n Poder de defesa: ' + powerDefender + '\n Possui escudo: ' + shield
  )




