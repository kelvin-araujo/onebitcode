const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "] // Array com teclas permitidas no input

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })           
}) // Interando sobre os botões, adicionando um evento e retornando uma função para adicionar os dados das teclas clicadas com o mouse no input

document.getElementById('clear').addEventListener('click', function () {
  input.value = ''
  input.focus()
}) // Adicinei um evento ao botão C da calculadora para apagar e focar no input

input.addEventListener('keydown', function (ev) {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)){
      input.value += ev.key
  return
  }  // Evento que verifica se as teclas clicadas no teclado (ev.key), fazem parte das teclas permitidas no array. Caso afirmativo ela adiciona no input

  if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  } // Se a tecla clicada for igual o backspace o input vai remover a última tecla digitada "slice(0, -1)"

  if(ev.key === 'Enter') {
    calculate()
  } // Se a tecla clicada for igual a enter, aciona a função calculate.
})

document.getElementById('equal').addEventListener('click', calculate)
// Adicinado evento para chamar a função calculate quando clicar no igual

function calculate () {
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
} //  A função eval avalia uma expressão e retorna seu valor. Nesse caso eu estou usando para resolver expressões aritiméticas. Primeiro é setado o valor e classe css de erro para todos os resultados. Se houver resposta do eval, o resultado aparece e remove a classe css para erro.

document.getElementById('themeSwitcher').addEventListener('click', function () {
  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#aaa' )
    root.style.setProperty('--font-color','#212529')
    root.style.setProperty('--primary-color', '#26834a')
    main.dataset.theme = 'light'
  } else {
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--border-color', '#666' )
    root.style.setProperty('--font-color','#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme = 'dark'
  }
}) // Adicionado o evento de click para verificar se o tema for dark ou light, e setar as propriedades em cada cor que irá mudar.

document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
  const button = ev.currentTarget
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
}) // Função para pegar o elemento atual, mudar o texto para copiado, adiciiona a classe 'success' do css e copia o texto para área de transferencia

