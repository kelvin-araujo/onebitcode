const arr = ['Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli' ]
console.log(arr)

//ADICIONAR ELEMENTOS //

//push - Adiciona no final
let tamanho = arr.push('Boromir')
console.log(arr)
console.log(tamanho)

// unshift - Adiciona no início
tamanho = arr.unshift('Teste')
console.log(arr)
console.log(tamanho)

// REMOVER ELEMENTOS //

//pop - Remove último elemento e devolve

let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift - Remove o primeiro elemento e devolve
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// PESQUISAR ELEMENTOS //

//includes - pesquisa o elemento e retorna true ou false

const inclui = arr.includes('Gandalf')
console.log(inclui)

//indesOf - pesquisa o elemento e retorna a posição dele
const indice = arr.indexOf('Gandalf')
console.log(indice)

// CORTAR E CONCATENAR //

//slice - cria uma cópia do array
const hobbits = arr.slice(0, 4) // irá pegar a partir do 0, 4 elementos
const outros = arr.slice(-4) // irá pegar a posição 4 de trás pra frente 
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat - concatena e armazena o novo dado

const sociedade = hobbits.concat(outros, 'Boromir')
console.log(sociedade)

// SUBSTITUIÇÃO DOS ELEMENTOS //

//splice - remove um grupo de elementos e substitui
// irá encontrar o índice / ver quantos elementos precisa excluir a partir dele( no caso 1), e adicionar o elemento digitado
const elementosRemovidos = sociedade.splice(indice, 1, 'Galdanf, o Cinzento') 
console.log(sociedade)
console.log(elementosRemovidos)

// INTERAR SOBRE OS ELEMENTOS //
for(let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + ' se encontra na posição ' + indice)
}
