const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function() {
  input.value = 'Olá, mundo!' 

  console.log(input.value)
  console.log(input.getAttribute('value')) 
  // getAttribute devolve o valor inicial contido no HTML, se não existir valor ele retorna null, que é o caso acima.
})

//          --------------------//--------------------

document.getElementById('type').addEventListener('click', function() {
  // input.type = input.type !== 'date' ? 'date' : 'text'
  input.setAttribute('type', 'radio')
  // setAttribute altera o atributo do elemento HTML
})

//          --------------------//--------------------

document.getElementById('placeholder').addEventListener('click', function() {
  input.placeholder = 'Digite algo...'
})

//          --------------------//--------------------

document.getElementById('disable').addEventListener('click', function() {
  input.setAttribute('disabled', !input.disabled )
}) // No exemplo acima estou desabilitando o input text

//          --------------------//--------------------

document.getElementById('data').addEventListener('click', function() {
  const data = input.dataset.somethingElse
  console.log('O valor do atributo data-something-else é: ' + data)

  input.dataset.somethingElse = 'Algum outro valor'
  console.log('O valor do atributo data-something-else agora é: ' + input.dataset.somethingElse)
}) // A propriedade dataset permite que adicionemos dados a elementos HTML.