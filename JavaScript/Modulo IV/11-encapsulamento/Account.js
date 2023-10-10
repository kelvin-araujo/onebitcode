class Account {
  #password
  #balance = 0
  constructor(user) {
    this.email = user.email
    this.#password = user.password
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance
    } else {
      return null
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password
  }
}

const user = {
  email: 'kelvin@email.com',
  password: '123456'
}

const myAccount = new Account(user)
console.log(myAccount)
console.log(myAccount.getBalance('kelvin@email.com', '123456'))

/* Encapsulamento é quando voce torna um método ou atributo restrito, não dando acesso para modifica-lo. Nesse exemplo o password e balance estão restritos, não permitindo que sejam alterados fora da classe, apenas conseguimos consultar o valor de balance usando os métodos getBalance e authenticate, mas não conseguimos alterar o valor.*/