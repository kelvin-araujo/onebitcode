 export default function (ev) {
  const button = ev.currentTarget
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(document.querySelector('#result').value)
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
} // Função para pegar o elemento atual, mudar o texto para copiado, adiciiona a classe 'success' do css e copia o texto para área de transferencia