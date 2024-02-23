let opcoes = "5";

let opcoess = prompt(
  "Menu interativo:\n" +
    "Opção 1" +
    "\nOpção 2" +
    "\nOpção 3" +
    "\nOpção 4" +
    "\nOpção 5"
);
do {
  alert("Opção escolida: " + opcoess + "\n");
  let opcoeess = prompt(
    "Menu interativo:\n" +
      "Opção 1" +
      "\nOpção 2" +
      "\nOpção 3" +
      "\nOpção 4" +
      "\nOpção 5" +
      "\nEscolha outras opções: "
  );
  opcoess = opcoeess;
} while (opcoess < opcoes);

alert("O sistema esta sendo encerrado:");
