// inicialização ; condição ; finalização

let escolha = prompt(
  "Escolha um numero de contagem de 1 a 10:\nLembrando que a contagem vai até o numero que você escolher. "
);
let number = 0;

for (number; number <= escolha; number++) {
  if (escolha > 10) {
    break;
  }
  alert("Numero = " + number);
}

if (escolha > 10) {
  alert("Opção invalida.");
} else {
  number -= 1;
  alert("Numero " + number + " Repetido " + escolha + " vezes");
}

// Opção sem limite de contagem, na verdade o limite é o numero de repetição que o suario disser

// let escolha = prompt("Escolha um numero de contagem: ");
// let number = 0;

// for (number; number <= escolha; number++) {
//   alert("Numero = " + number);
// }

// number -= 1;
// alert("Numero " + number + " Repetido " + escolha + " vezes");

// let i = 0;

// for (alert("Inicializando o For"); number <= 10; number++) {
//   alert("Numero = " + number);
// }

// alert("Numero = " + i);

// let i = 0;

// for (
//   alert("Inicializando o For");
//   i <= 5;
//   alert("Finalizando um bloco de repetição")
// ) {
//   alert("Numero = " + i);
//   i++;
// }
// i -= 1;
// alert("Numero total repetido " + i);

// let nome = "Pedro"; // tamanho 5 -> 0, 1, 2, 3, 4, 5

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }
