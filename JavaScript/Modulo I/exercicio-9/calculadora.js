function calcAreaTriangulo() {
  const base = prompt('Informe a base do triângulo:')
  const altura = prompt('Informe a altura do triângulo:')
  return base * altura / 2
}

function calcAreaRetangulo() {
  const base = prompt('Informe a base do retângulo:')
  const altura = prompt('Informe a altura do retângulo:')
  return base * altura
}

function calcAreaQuadrado() {
  const lado = prompt('Informe o lado do quadrado:')
  return lado * lado
}

function calcAreaTrapezio() {
  const baseMaior = Number(prompt('Informe a base maior do trapézio:'))
  const baseMenor = Number(prompt('Informe a base menor do trapézio:'))
  const altura = prompt('Informe a altura do trapézio:')
  return (baseMaior + baseMenor) * altura / 2

}

function calcAreaCirculo() {
  const raio = prompt('Informe o raio do cículo:')
  const pi = '3.14'
  return (pi * raio * raio)
}

function exibirMenu() {
  return prompt (
    'Calculadora Geométrica\n' +
    '1. Calcular área do triângulo\n' +
    '2. Calcular área do retângulo\n' +
    '3. Calcular área do quadrado\n' +
    '4. Calcular área do trapézio\n' +
    '5. Calcular área do círculo\n' +
    '6. Sair'
  )
}

function executar() {
  let opcao = ''

  do {
    opcao = exibirMenu()
    let resultado

    switch (opcao) {
      case "1":
        resultado = calcAreaTriangulo()
        break
      case "2":
        resultado = calcAreaRetangulo()
        break
      case "3":
        resultado = calcAreaQuadrado()
        break
      case "4":
        resultado = calcAreaTrapezio()
        break
      case "5":
        resultado = calcAreaCirculo()
        break
      case "6":
        alert('Saindo...')
        break
      default:
        alert('Opção inválida')
    }

    if (resultado) {
      alert(' Resultado: ' + resultado )
    }
  } while (opcao !== '6')
}

executar()


