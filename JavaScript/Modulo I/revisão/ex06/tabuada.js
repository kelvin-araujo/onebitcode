let number = Number (prompt(
  'Olá, eu sou o robô da tabuada' +
  '\nInforme o número que você deseja calcular a tabuada:'
))

let result = ''

for ( i = 1; i <= 20; i++) {
  result += ' -> ' + number + ' * ' + i + ' = ' + (number * i) + '\n'
}

alert('O resultado da tabuada de ' + number + ':\n\n' + result)