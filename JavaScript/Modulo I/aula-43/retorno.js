function calcularMedia(a, b) {
  const media = (a + b) / 2
  return media 
}
const resultado = calcularMedia(7, 2)

console.log(resultado)

// Quando damos o parâmetro fora da função é preciso usar o return para mostrar o resultado da variável (nesse caso)

function criarProduto(nome, preco) {
  const produto = {
    nome, // nome: nome
    preco, // preco: preco
    estoque: 1
  }
  return produto
}

console.log(criarProduto('Notebook Itel Core I3 8GB', 2500))

// Utilizando função com objeto e return , pois o parâmetro está fora da função dentro do console log

function areaRetangular(base, altura) {
  return base * altura
}

function areaQuadrada(lado) {
  return areaRetangular(lado, lado)
}

console.log(areaRetangular(3, 5))

console.log(areaQuadrada(9))

// Nesse caso utilizamos uma função para calcular a área e a outra função que está calculado área ² está utilizando a outra função para fazer o cálculo

function ola() {
  let texto = '...'
  texto = ' Olá, mundo! '
  return texto
  console.log(texto)
}

console.log(ola())

// A função só pode retornar uma vez. Caso tenha algo depois do return, será ignorado.

function maiorIdade(idade) {
  if(idade >= 18) {
    return 'Maior de idade'
  } else {
    return 'Menor de idade'
  }
}

console.log(maiorIdade(29))
console.log(maiorIdade(13))

// Podemos utilizar dois return, quando a função tem varias ramificações.