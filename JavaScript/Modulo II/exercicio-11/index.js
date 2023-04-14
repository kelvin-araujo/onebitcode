function addPlayer() {
  let position = document.getElementById('position').value
  let name = document.getElementById('name').value
  let number = document.getElementById('number').value

  const confirmation = confirm('Deseja escalar ' + name + ' como ' + position + '?')

  if(confirmation) {
    const teamList = document.getElementById('teamList')
    const playerItem = document.createElement('li')
    playerItem.id = 'player-' + number
    playerItem.innerText = position + ': ' + name + ' (' + number + ')'
    teamList.appendChild(playerItem)

    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
  }
}

function removePlayer() {
  const number = document.getElementById('numberToRemove').value
  const playerToRemove = document.getElementById('player-' + number) 

  const confirmation = confirm('Remover o jogador ' + playerToRemove.innerText + '?')

  if(confirmation) {
    playerToRemove.remove()
    document.getElementById('numberToRemove').value = ''
  }
}