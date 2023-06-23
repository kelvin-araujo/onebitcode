// Função normal
function normalSum (a, b) {
  return a + b
}
console.log(`Soma normal: ${normalSum(2, 2)}`)

// Função anônima
const anonymousSum = function (a, b) {
  return a + b
}
console.log(`Soma anônima: ${anonymousSum(2, 2)}`)

// Arrow Function

const arrowSum = (a, b) => {
  return a + b
} 
console.log(`Soma arrow function: ${arrowSum(2, 2)}`)
// Com parênteses e chave

const subtract = (a, b) => a - b
console.log(`Subtração: ${subtract(5, 2)}`)
// Com parênteses e sem chave

const double = n => `O dobro de ${n} é ${n * 2}`
const number = 21
console.log(double(number))
// Sem parênteses e sem chave

const towns = ['São João', 'Caxias', 'Nilópolis', 'Mesquita', 'Centro', 'Xerém']

const startingWithP = towns.filter(town => town[0] === 'C')
console.log(startingWithP)
// Usando junto com high order functions dos arrays


