let row = [];
let option = "";

do {
  let patients = "";
  for (let i = 0; i < row.length; i++) {
    patients += (i + 1) + "º - " + row[i] + "\n";
  }

  option = prompt(
    "Pacientes:\n" +
      patients +
      "\nEscolha uma ação:\n1. Novo Paciente\n2. Consultar Paciente\n3. Sair"
  );

  switch (option) {
    case "1":
      const newPatients = prompt("Qual o nome do paciente?");
      row.push(newPatients);
      break;
    case "2":
      const pacientConsulted = row.shift();
      if (row.length > 0) {
        alert(pacientConsulted + " foi removido da fila!");
      } else {
        alert("Não há pacientes na fila!");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (option !== '3');
