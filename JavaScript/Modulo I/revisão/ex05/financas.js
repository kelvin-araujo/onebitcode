let option = ""

let cash = Number(prompt(
  "Informe a quantidade de dinheiro inicial:"
))

do {
  option = prompt(
    "Saldo disponível: R$ " + cash +
    "\n1. Adicionar dinheiro" +
    "\n2. Remover dinheiro" +
    "\n3. Sair"
  )

  switch (option) {
    case "1":
      const moreCash = Number(prompt("Informe o valor que você deseja adicionar:"))
      cash += moreCash
      break
    case "2":
      const removeCash = Number(prompt("Informe o valor que você deseja remover:"))
      cash -= removeCash
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
  }

} while (option !== "3")
