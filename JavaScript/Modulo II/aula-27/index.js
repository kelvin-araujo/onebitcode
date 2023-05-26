document.getElementById('sessionBtn').addEventListener('click', function() {
  const input = document.getElementById('session')
  sessionStorage.setItem('info', input.value)
  input.value = ''
})

document.getElementById('readSession').addEventListener('click', function() {
  const info = sessionStorage.getItem('info')
  alert('A informação salva é: ' + info)
})

// Forma de armazenar dados no session storage. Os dados ficam salvos enquanto a aba do navegador estiver aberta. 
// setItem = utilizado para atribuir uma informação na memória
// getItem = utilizado para acessar a informação salva

document.getElementById('localBtn').addEventListener('click', function() {
  const input = document.getElementById('local')
  localStorage.setItem('text', input.value)
  input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function() {
  const text = localStorage.getItem('text')
  alert('O texto salvo no local storage é: ' + text)
})

// Forma de armazenar dados no local storage. Os dados ficam salvos para sempre, até serem removidos manualmente.

document.getElementById('cookieBtn').addEventListener('click', function() {
  const input = document.getElementById('cookie')
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date(2023,4,27) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function() {
  const input = document.getElementById('cookie2')
  const cookie = 'text=' + input.value + ';'
  const expiration = 'expires=' + new Date(2023,4,28) + ';'
  const path = 'path=/'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})

// Forma de armazenar dados em cookies. Os dados ficam salvos até vencer a data de expiração (espires). A informação fica salva mesmo depois de fechar o navegador e podem existir no servidor, sendo devolvidos quando uma página html for solicitada.