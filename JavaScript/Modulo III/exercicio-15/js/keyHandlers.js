import calculate from "./calculate.js"

const input = document.querySelector('#input')

export function handleButtonPress(ev) {
  const value = ev.currentTarget.dataset.value
  input.value += value
} // Interando sobre os botões, adicionando um evento e retornando uma função para adicionar os dados das teclas clicadas com o mouse no input

export function handleClearButton() {
  input.value = ''
  input.focus()
} // Adicinei um evento ao botão C da calculadora para apagar e focar no input

export function handleTyping(ev) {
  ev.preventDefault()
  const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "] // Array com teclas permitidas no input
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
}