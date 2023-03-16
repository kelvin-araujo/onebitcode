const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// ------------- MAP ------------
/*Funciona como uma estrutura de repetição, pois percorre todos os elementos do array, executa determinada ação e retorna um novo conteúdo./ */

//Método de obter uma propriedade do array sem usar high order functions

/*
const nomes = []

for (let i = 0; i < personagens.length; i++) {
  nomes.push(personagens[i].nome)
}
console.log(nomes)
*/

// Método usando high order functions

const nomes = personagens.map(function (personagem) {
  return personagem.nome
})

console.log(nomes)

// usamos o map para mapear as propriedades e retornar apenas os nomes

// ---------------- FILTER ------------
/* Chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou um valor que seja convertido para true. */

// Método sem usar Filter 

/* 
const orcs = []

for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === 'Orc') {
    orcs.push(personagens[i])
  } 
}

console.log(orcs)

*/

// Método  Filter (também é uma High order functions) Serve para filtrar propriedades dos arrays

const orcs = personagens.filter(function (personagem) {
  return personagem.raca === 'Orc'
})

console.log(orcs)


// -------------- REDUCE ------------
/* Serve para iterar sobre um array e utilizar o valor de cada item para criar um objeto final com base em alguma regra. Como o próprio nome da função sugere, ela “reduz” os itens de um vetor a um valor único */

const nivelToltal = personagens.reduce( function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelToltal)

// No exemplo acima somamos os niveis dos personagens usano o reduce. Ele esta inteirando sobre o array e acumulando os valores de niveis para formar um objeto final. O zero é pra indicar o valor inicial do valorAumulado

const racas = personagens.reduce (function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]){
    valorAcumulado[personagem.raca].push(personagem)
  } else {
    valorAcumulado[personagem.raca] = [personagem]
  }

  return valorAcumulado
}, {})

console.log(racas)

// ---------------- SORT -----------------



