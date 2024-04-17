const App = require("./App")

App.createUser('kelvin@email.com', 'Kelvin Araujo')
App.createUser('solany@email.com', 'Solany Araujo')
App.createUser('isabela@email.com', 'Isabela Bonfim')

App.deposit('kelvin@email.com', 100)

App.transfer('kelvin@email.com', 'solany@email.com', 20)

App.changeLoanFee(10)
App.takeLoan('isabela@email.com', 2000, 24)

console.log(App.findUser('kelvin@email.com'))
console.log(App.findUser('kelvin@email.com').account)
console.log(App.findUser('solany@email.com'))
console.log(App.findUser('solany@email.com').account)
console.log(App.findUser('isabela@email.com'))
console.log(App.findUser('isabela@email.com').account)
console.log(App.findUser('isabela@email.com').account.loans[0].installments)