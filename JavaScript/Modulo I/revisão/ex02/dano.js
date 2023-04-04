const nameAttacker = prompt('Informe o nome do personagem de ataque:')
const powerAttacker = prompt('Informe o poder de ataque do personagem:')

const nameDefender = prompt('Informe o nome do personagem de defesa:')
let lifeDefender = prompt('Informe os pontos de vida do personagem de defesa:')
const powerDefender = prompt('Informe o poder de defesa do personagem:')
const shield = prompt('O personagem de defesa possui escudo? (Sim/Não)')

let demage = 0

if (powerAttacker > powerDefender && shield === 'Não') {
  demage = powerAttacker - powerDefender
} else if (powerAttacker > powerDefender && shield === 'Sim') {
  demage = (powerAttacker - powerDefender) / 2
} 

lifeDefender -= demage

alert(
  nameAttacker + ' causou ' + demage + ' pontos de dano em ' + nameDefender + '.'
)
alert(
  nameAttacker + ' \nPoder de ataque: ' + powerAttacker + '\n\n' +
  nameDefender + ' \nPontos de vida: ' + lifeDefender + 
  '\nPoder de defesa: ' + powerDefender + '\nPossui escudo: ' + shield
)