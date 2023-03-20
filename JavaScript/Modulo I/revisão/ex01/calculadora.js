const numberOne = Number(prompt("Insira o primeiro  número:"))
const numberTwo = Number(prompt("Insira o segundo número:"))

const soma = numberOne + numberTwo
const subtracao = numberOne - numberTwo
const multiplicacao = numberOne * numberTwo
const divisao = numberOne / numberTwo

alert (
  "Resultado das operações:" +
  "\nSoma: " + soma +
  "\nSubtração: " + subtracao +
  "\nMultiplicação: " + multiplicacao +
  "\nDivisão: " + divisao
)