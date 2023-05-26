// Variáveis globais úteis
const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''

function updateTitlle() {
  const playerInput = document.getElementById(turnPlayer)
  document.getElementById('turnPlayer').innerText = playerInput.value
} // Função usada para pegar a variavel turnPlayer, que está vazia, e o id turnPlayer, que será modificada pelo texto que a pessoa inserir

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
    element.classList.add('cursor-pointer')
    element.addEventListener('click', handleBoardClick)
  })  // Altera o texto h2, remove a classe win e o texto dos spans caso o jogo já tenha iniciado alguma vez, tendo algum ganhador. Adiciona um evento de click nos spans, chamando a função handleBoardClick
}

function getWinRegions () {
  const winRegions = []
  if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2")
  if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2")
  if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0")
  if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0")
  return winRegions
} // Verifica se existem três regiões iguais em sequência e devolve as regiões

function disableRegion (element) {
  element.classList.remove('cursor-pointer')
  element.removeEventListener('click', handleBoardClick)
} // Desabilita uma região do tabuleiro para que não seja mais clicável

function handleWin(regions) {
  regions.forEach(function (region) {
    document.querySelector('[data-region="' + region + '"]').classList.add('win')
  })
  const playerName = document.getElementById(turnPlayer).value
  document.querySelector('h2').innerHTML = playerName + ' venceu!'
}

function handleBoardClick (ev) {
   // Obtém os índices da região clicada
  const span = ev.currentTarget
  const region = span.dataset.region // N.N
  const rowColumnPair = region.split('.') // [ 'N', 'N' ]
  const row = rowColumnPair[0]
  const column = rowColumnPair[1]
  // Marca a região clicada com o símbolo do jogador
  if (turnPlayer === "player1") {
    span.innerText = "X";
    vBoard[row][column] = "X";
  } else {
    span.innerText = "O";
    vBoard[row][column] = "O";
  }
  // Limpa o console e exibe nosso tabuleiro virtual
  console.clear();
  console.table(vBoard);
  // Desabilita a região clicada
  disableRegion(span);  
   // Verifica se alguém venceu
  const winRegions = getWinRegions()
  if(winRegions.length > 0) {
    handleWin(winRegions)
  } else if (vBoard.flat().includes('')) {
    turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
    updateTitlle()
  } else {
    document.querySelector('h2').innerHTML = 'Empate!'
  }
} 
// Essa função está pegando o dataset do elemento atual (span) usando o currentTarget. Depois, utilizando a propriedade split, separamos a string ('0,0 / 0,1 / 0,2 ect...') e formamos um array. Depois pegamos esse array na posição 0 e 1 que representa a linha e a coluna 
// Após, utilizando o if, é setado para: se o turnPlayer for o jogador 1, irá mudar o texto para X, tanto no span, quanto no vBoard ( tabuleiro virtual no console ). Caso não seja o jogador 1, irá mudar para O, limpar o console, forma uma tabela com os dados do vBoard no console, ativa a função disableRegion, que desabilita a região clicada e a função getWinRegions, para verificar se o jogador ganhou.
// O elemento flat vai pegar o array bidimensinal e 'achatar' em um array unidimensional e logo em seguida é verificado se dentro desse array está incluído um espaço vazio. Se houver, o jogo continua e é alterado o player 1 para o player 2 e vice versa.

// Adiciona o evento no botão que inicia o jogo
document.getElementById('start').addEventListener('click', initializeGame)