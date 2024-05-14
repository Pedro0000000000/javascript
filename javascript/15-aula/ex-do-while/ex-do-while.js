let opcoes = "5";

let opcoess = prompt(
  "Menu interativo:\n" +
    "Opção 1" +
    "\nOpção 2" +
    "\nOpção 3" +
    "\nOpção 4" +
    "\nOpção 5 encerar"
);
do {
  alert("Opção escolida: " + opcoess + "\n");
  let opcoeess = prompt(
    "Menu interativo:\n" +
      "Opção 1" +
      "\nOpção 2" +
      "\nOpção 3" +
      "\nOpção 4" +
      "\nOpção 5 tem certeza que deseja encerrar?" +
      "\nEscolha outras opções: "
  );

  opcoess = opcoeess;
} while (opcoess < opcoes);

alert("O sistema esta sendo encerrado:");

let opcao = "";

while (opcao !== "5") {
  opcao = prompt(
    "Menu interativo:\n" +
      "Opção 1\n" +
      "Opção 2\n" +
      "Opção 3\n" +
      "Opção 4\n" +
      "Opção 5 (para encerrar)"
  );

  if (opcao !== "5") {
    alert("Opção escolhida: " + opcao + "\n");
  }
}

alert("O sistema está sendo encerrado.");
