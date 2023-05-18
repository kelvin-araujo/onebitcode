const boardRegions = document.querySelectorAll('#gameBoard span')
const vBoard = []
let turnPlayer = ''

function updateTitlle() {
  const playerInput = document.getElementById(turnPlayer)
  document.getElementById('turnPlayer').innerText = playerInput.value
} // Função usada para pegar a variavel turnPlayer, que está vazia, e a classe turnPlayer, que será modificada pelo texto que a pessoa inserir

function initializeGame () {

}