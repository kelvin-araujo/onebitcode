let pokemon = 'Charmander'

function evoluir() {
  pokemon = 'Charmeleon'
}

 console.log(pokemon)
 evoluir()
console.log(pokemon)

// As variáveis de escopo externo podem ser usadas no escopo interno ( dentro de funções, ifs, etc...). Mesmo criando uma variável fora da função ela pode ser usada dentro da função.

function criarAnimal() {
  let animal = 'Gato'
}

criarAnimal()
//console.log(animal)

//  Variáveis criadas em escopo interno não podem ser usadas no escopo externo


function avaliarNota(nota) {
  if(nota > 60) {
    var aprovado = true
    let situacao = 'Aprovado'
  } else {
    var aprovado = false
    let situacao = 'Reprovado'
  }
  console.log(nota)
  console.log(aprovado)
 // console.log(situacao)
}

avaliarNota(83)
avaliarNota(49)

// Quando utilizamos o var, mesmo estando num escopo interno (dentro de uma função e dentro de um if), ele aparece com o resultado. Já o let não. Por isso utilizamos mais o let que o var.

function ola() {
  var texto = 'Olá,mundo!'
}

//console.log(texto)

// Quando criamos um var dentro de uma função, ele não pode ser usado fora dela. Apenas quando estiver dentro de um if ou else, que está dentro de uma função, como o exemplo acima.

console.log(nome)
//console.log(sobrenome)

var nome = 'Kelvin'
let sobrenome = 'Araújo'

console.log(nome)
//console.log(sobrenome)

// Variáveis com var começam a existir no início do arquivo, não contendo um valor atribuído. Já o let passa a existr a partir da linha que foi criado. Por isso o arquivo reconhece o var como undefined, mas o let como erro, porque é como se o var estivesse na primeira linha sem o valor e o let ainda não foi criado.