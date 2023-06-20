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

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b )
  const middle = Math.floor(orderedNumbers.length / 2)
  if (orderedNumbers.length & 2 !== 0) {
    return orderedNumbers[middle]
  } 
  // 1, 2, 4, 5, 6, 9 -> Números do meio = 4, 5
  const firstMedian = orderedNumbers[middle - 1] // -1 porque a média é sempre um número acima
  const secondMedian = orderedNumbers[middle]
  return average(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`) // 2, 4, 5, 7, 42, 99
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`) // 3, 7, 8, 14, 15

// Para encontrar a mediana precisamos achar os números que estão no meio e fazer a médias entre eles. Primeiro precisei ordernor os números, usando o sort. Depois, usando o math foi encontrado o meio do array e arredondado. Se o número for impar, tendo apenar um número no meio, irá retornar o próprio número, se for par, irá pegar o número do meio - 1 e o do meio e usar a função average para calcular a média. 


const mode = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)

// Para achar a moda, precisamos achar o número que mais se repete. Para isso foi usado o map para criar um array com outro resultado, baseado no array original.Usando o parâmetro num, que é o elemento atual e após, usando o filter, foi filtrado os elementos do array principal que são iguais os do elemento atual e encontrado a quantidade usando o length. Assim, o quantities vira um array bidimensional
// Depois foi ordenado o quantities de ordem decrescente, pegando o número que está na primeira posição, que é a quantidade de números repetidos. Por fim foi retornado o elemento que está em quantities que está na posição 0.
