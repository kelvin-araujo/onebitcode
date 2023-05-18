// Variáveis globais úteis
const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''

function updateTitlle() {
  const playerInput = document.getElementById(turnPlayer)
  document.getElementById('turnPlayer').innerText = playerInput.value
} // Função usada para pegar a variavel turnPlayer, que está vazia, e a classe turnPlayer, que será modificada pelo texto que a pessoa inserir

function initializeGame () {
  // Inicializa as variáveis globais 
  vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
  turnPlayer = 'player1'
  // Ajusta o título da página (caso seja necessário)
  document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
  updateTitlle()
  // Limpa o tabuleiro (caso seja necessário) e adiciona os eventos de clique
  boardRegions.forEach(function (element) {
    element.classList.remove('win')
    element.innerText = ''
    element.addEventListener('click', handleBoardClick)
  })  // Altera o texto h2, remove a classe win e o texto dos spans caso o jogo já tenha iniciado alguma vez, tendo algum ganhador. Adiciona um evento de click nos spans, chamando a função handleBoardClick
}

function disableRegion (element) {
  element.style.cursor = 'default'
  ElementInternals.removeEventListener('clixk', handleBoardClick)
} // Desabilita uma região do tabuleiro para que não seja mais clicável

function handleBoardClick (ev) {
   // Obtém os índices da região clicada
  const span = ev.currentTarget
  const region = span.dataset.region // N.N
  const rowColumnPair = region.split('.') // [ 'N', 'N' ]
  const row = rowColumnPair[0]
  const column = rowColumnPair[1]
  // Marca a região clicada com o símbolo do jogador
  if (turnPlayer === 'player1') {
    span.innerText = 'X'
    vBoard[row][column] = 'X'
  } else {
    span.innerText = 'O'
    vBoard[row][column] = 'O'
     // Limpa o console e exibe nosso tabuleiro virtual
    console.clear()
    console.table(vBoard)
    // Desabilita a região clicada
    disableRegion(span)
  }
} 
// Essa função está pegando o dataset do elemento atual (span) usando o currentTarget. Depois, utilizando a propriedade slipt, separa a string ('0,0 / 0,1 / 0,2 ect...') e forma um array. Depois pegamos esse array na que representa a linha e a coluna utilizando a posição 0 e 1
// Após, utilizando o if, é setado para: se o turnPlayer for o jogador 1, irá mudar o texto para X, tanto no span, quanto no vBoard ( tabuleiro virtual no console ). Caso não seja o jogador 1, irá mudar para O, limpar o console e formar uma tabela com os dados do vBoard no console

document.getElementById('start').addEventListener('click', initializeGame)