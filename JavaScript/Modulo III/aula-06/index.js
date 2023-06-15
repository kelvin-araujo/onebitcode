// Desestruturação é quando você cria uma variável a partir de um array ou objeto. No caso dos objetos você não precisa nomear a variável, mas no caso do array é preciso nomea-la.

// ---------- Exemplo com objetos ----------
const person = {
  name: 'Luke',
  job: 'farmer',
  parents: ['Anakin', 'Padme']
}

const name = person.name

const { job, parents } = person

console.log(name, job, parents)
// Das duas formas obtemos o mesmo resultado. Da segunda forma é desestruturando. O JS entende, a partir das chaves antes do =, que você quer desestruturar o objeto e pegar as propriedades.

// ------------ Exemplo com array --------------

const [father, mother] = parents
console.log(father, mother)

// No exemplo acima estamos desestruturando o objeto e nomeando como father e mother, que representam as propriedades do parents

// ------------- Exemplo com Funções -------------

// Sem desestruturação
function createUser(person) {
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name: person.name,
    job: person.job,
    parents: person.parents
  }
}

const luke = createUser(person)
console.log(luke)

// Com desestruturação

function createUser({name, job, parents}) {
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    job,
    parents
  }
}

const luke1 = createUser(person)
console.log(luke)