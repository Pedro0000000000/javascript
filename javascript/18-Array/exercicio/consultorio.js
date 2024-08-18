let fila = []; // TAMANHO DA FILA EX: 0, 1, 2, 3, 4, 5,...
let opcao = ""; // ESSA VARIAVEL VAI TER 3 OPÇÕES

do {
  let pacientes = ""; // PARA SABER O NOME DOS PACIENTES
  //  (INICIALIZAÇÃO; ENQUANTO   ; FINALIZANDO)
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º - " + fila[i] + "\n"; // ESSE  (i + 1) SERVE PARA CORRIGIR A CONTAGEM NA LISTA, PORQUE O COMPUTADOR COMEÇA A CONTAGEM PELO 0 POREM NÓS HUMANOS COMEÇAMOS PELO 1
  }

  opcao = prompt(
    "consultorio do Doutor Nerfario:\n" +
      "Lista de pacientes:\n" +
      pacientes +
      "\nEscolha uma ação:\n" +
      "1- Novo Paciente.\n" +
      "2- Consultar Paciente.\n" +
      "3- Sair"
  );

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do Paciente?");
      fila.push(novoPaciente); // .push() em JavaScript é usado para adicionar elementos ao final de um array
      break;
    case "2":
      const pacienteConsultado = fila.shift(); // .shift() em JavaScript é usado para remover elementos do começo de um array
      if (typeof pacienteConsultado === "string") {
        //outras formas de fazer, (fila.lenght > 0); or (pacienteConsultado); o js tentará converter isso para borleano,
        alert(pacienteConsultado + " foi Consultado com sucesso.");
      } else {
        alert("Nenhum paciente para se consultado.");
      }
      break;
    case "3":
      alert("Encerrando");
      break;
    default:
      alert("Opção invalida, tente novamente");
  }
} while (opcao !== "3");
