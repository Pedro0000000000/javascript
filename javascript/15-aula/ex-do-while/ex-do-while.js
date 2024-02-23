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
