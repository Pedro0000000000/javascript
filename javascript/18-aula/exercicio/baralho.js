const baralho = [];
let opcoe = "";

do {
  opcoe = prompt(
    "Cartas no baralho: " +
      baralho.length +
      "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  );
  switch (opcoe) {
    case "1":
      const novaCarta = prompt("Qual é a carta?");
      baralho.push(novaCarta); // .push() em JavaScript é usado para adicionar elementos ao final de um array
      break;
    case "2":
      const cartaPuxada = baralho.pop(); // .pop() é utilizado para remover o último elemento de um array e retorná-lo. Ele altera o próprio array, reduzindo seu comprimento em 1.
      if (baralho.length > 0) {
        alert("Você puxou um(a) " + cartaPuxada);
      } else {
        alert("Nenhuma carta para ser puxada.");
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção invalida");
  }
} while (opcoe !== "3");
