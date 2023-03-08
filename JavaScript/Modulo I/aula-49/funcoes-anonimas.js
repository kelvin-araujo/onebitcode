
/*function somar(a, b) {
  return a + b
}

let operacao = somar

console.log(operacao(4, 5))

operacao = function (a, b) {
  return a - b
}

console.log(operacao(4, 5))
*/

// Função anônima é quando a função não tem nome. Para isso armazenamos ela dentro de uma variável

olaMundo()


function olaMundo() {
  console.log("Olá, Mundo!")
}

const oiMundo = function () {
  console.log('Oi, Mundo!')
}

oiMundo()

// Funções anônimas só passam a existir depois da declaração. As funções comuns estão disponíveis no começo do arquivo.