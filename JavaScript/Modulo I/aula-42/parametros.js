function dobro(x) {
  alert('O dobro de ' + x + ' é ' + (x * 2))
}

//dobro(5)
//dobro(7)

function dizerOla(nome = 'mundo') {
  alert("Ola, " + nome + '!')
}

//dizerOla('Kelvin')

function soma(a, b) {
  alert('O resultado da soma é ' + (a + b))
}

//soma(7, 6)
//soma(1, 1)

function criarUsuario(nome, email, senha, tipo = 'admin') {
  const usuario = {
    nome: nome,
    email: email,
    senha: senha,
    tipo: tipo
  }

  console.log(usuario)
}


criarUsuario('Kelvin', 'kelvin@gmail.com', '1234')

function muitosParametros(nome, telefone, endereco, aniversario,email,senha) {
  //...
}

function objComoParametro(usuario) {
  usuario.nome
  usuario.email
  
}

muitosParametros('nome', 'telefone', 'endereco', 'aniversario', 'email', 'senha')

const dadosDoUsuario = {
  nome: '',
  telefone: '',
  endeco: '',
  aniversario: '',
  email: '',
  senha: '',
}

objComoParametro(dadosDoUsuario)