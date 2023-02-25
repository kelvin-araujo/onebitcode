const number = Number(prompt (
  'Olá, eu sou o Robô da tabuada \n' +
   'Informe o número que você deseja calcular a tabuada:'
  ))

  let  result =  ''

  for (let fator = 1; fator <=20; fator++) {
    result += '->' + number + ' * ' + fator + ' = ' + (number * fator) + '\n'
  }

  alert(' Resultado da tabuada de ' + number + ':\n\n' + result )