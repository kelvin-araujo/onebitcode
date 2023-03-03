function dobro(x) {
  alert('O dobro de ' + x + ' é ' + (x * 2))
}

//dobro(5)
//dobro(7)

// ----------xx-------------

function dizerOla(nome = 'mundo') {
  alert("Ola, " + nome + '!')
}

//dizerOla('Kelvin')

// ----------xx-------------

function soma(a, b) {
  alert('O resultado da soma é ' + (a + b))
}

//soma(7, 6)
//soma(1, 1)

// ----------xx-------------

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

// ----------xx-------------

function muitosParametros(nome, telefone, endereco, aniversario,email,senha) {
  //...
}

muitosParametros('nome', 'telefone', 'endereco', 'aniversario', 'email', 'senha')

// ----------xx-------------

function objComoParametro(usuario) {
  usuario.nome
  usuario.email
  
}

const dadosDoUsuario = {
  nome: '',
  telefone: '',
  endeco: '',
  aniversario: '',
  email: '',
  senha: '',
}

objComoParametro(dadosDoUsuario)