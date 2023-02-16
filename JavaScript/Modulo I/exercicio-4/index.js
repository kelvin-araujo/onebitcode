const tourist = prompt('E aí, turista! Qual é o seu nome?')
let cities = ''
let score = 0

let keep = prompt('Você visitou alguma cidade? (Sim/Não)')

while (keep === 'Sim') {
  let city = prompt('Qual é o nome da cidade visitada?')
  // cities = cidades + ...
  cities += ' - ' + city + '\n'
  score++
  keep = prompt('Você visitou alguma outra cidade? (Sim/Não)')
}

alert(
  'Turista ' + tourist +
  '\n Quantidade de cidades vistitadas: ' + score +
  '\n Cidades vistadas:\n' + cities
)