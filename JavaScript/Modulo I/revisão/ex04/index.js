const nameTourist = prompt('Qual o seu nome, turista?')
let cities = ''
let score = 0

let visited = prompt('Você já visitou alguma cidade? (Sim/Não)')

while (visited === "Sim") {
  let city = prompt("Qual o nome da cidade visitada?")
  cities += "- " + city + "\n"
  score++
  visited = prompt("Você já visitou mais alguma cidade? (Sim/Não)")
} 

alert (
  'Turista ' + nameTourist +
  '\nQuantidade de cidades visitadas: ' + score +
  '\nCidades visitas: \n' + cities
)