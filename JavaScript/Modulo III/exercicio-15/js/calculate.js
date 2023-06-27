export default function calculate () {
  const resultInput = document.querySelector('#result')
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
} //  A função eval avalia uma expressão e retorna seu valor. Nesse caso eu estou usando para resolver expressões aritiméticas. Primeiro é setado o valor e classe css de erro para todos os resultados. Se houver resposta do eval, o resultado aparece e remove a classe css para erro.