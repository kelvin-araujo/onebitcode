const average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0)
  return sum / numbers.length
}

console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9)}`)
// Para calcular a média simples utilizei uma função com diversos parametros ( rest params) e depois foi aplicado a hof reduce para somar os valores dos parametros e após foi dividido pela quantidade de parametros para achar a média


const weightedAverage = (...entries) => {
  const sum = entries.reduce((accum, {number, weight}) => accum + (number * weight), 0)
  const weightSum = entries.reduce((accum, entry) => accum + entry.weight, 0)
  return sum / weightSum
}

console.log(`Média Ponderada: ${weightedAverage(
  {number:9, weight: 3},
  {number:7, weight: 1},
  {number:10, weight: 1},
)}`)
// Para encontrar a média ponderada utilizei uma função com diversos parametros ( rest params) e depois foi aplicado a hof reduce para somar o acumulador com o número * o peso. Após encontrar o resultado foi utilizado novamente o reduce para somar os pesos e após foi dividido os resultados para encontrar a media ponderada.