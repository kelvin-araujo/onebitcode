let pessoa = {
  nome: 'Kelvin',
  idade: 26,
  dizerOla() {
    console.log('Olá, mundo! Meu nome é' + this.nome)
  }
}

console.log(pessoa)

pessoa.dizerOla()

// Metodos são funções dentro de objetos. Podemos utilizar uma propriedade do objeto utilizando o this.