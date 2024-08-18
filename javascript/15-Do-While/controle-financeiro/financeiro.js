let saldoInicial = parseFloat(
  prompt(
    "Olá caro cliente, quanto de dinheiro você tem disponivel na sua conta bancaria? "
  )
);

let opcoes = "";

do {
  opcoes = prompt(
    "Dinheiro disponivel $" +
      saldoInicial +
      " reais" +
      "\nOpções que nossos clientes tem: " +
      "\nOpção 1: Adicionar dinheiro" +
      "\nOpção 2: Remover dinheiro" +
      "\n Opção 3: Sair "
  );

  switch (opcoes) {
    case "1":
      saldoInicial += parseFloat(prompt("Adicione o valor a ser adicionado: "));
      break;
    case "2":
      saldoInicial -= prompt("Adicione o valor a ser removido: ");
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção invalida");
  }
} while (opcoes !== "3");

// Essa codigo aqui em baixo foi feito pelo chat gpt

// let saldoInicial = parseFloat(
//   prompt(
//     "Olá caro cliente, quanto de dinheiro você tem disponível na sua conta bancária? "
//   )
// );

// function adicionarDinheiro(saldo) {
//   let adicionar = parseFloat(prompt("Adicione o valor a ser adicionado: "));
//   return saldo + adicionar;
// }

// function removerDinheiro(saldo) {
//   let remover = parseFloat(prompt("Adicione o valor a ser removido: "));
//   return saldo - remover;
// }

// let opcoes = "";

// do {
//   opcoes = prompt(
//     "Dinheiro disponível $" +
//       saldoInicial +
//       " reais" +
//       "\nOpções que nossos clientes têm: " +
//       "\nOpção 1: Adicionar dinheiro" +
//       "\nOpção 2: Remover dinheiro" +
//       "\nOpção 3: Sair "
//   );

//   switch (opcoes) {
//     case "1":
//       saldoInicial = adicionarDinheiro(saldoInicial);
//       break;
//     case "2":
//       saldoInicial = removerDinheiro(saldoInicial);
//       break;
//     case "3":
//       alert("Saindo...");
//       break;
//   }
// } while (opcoes !== "3");

// alert("Saindo...");
