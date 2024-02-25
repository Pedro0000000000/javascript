// const numero = prompt(
//   "Olá, eu sou o robô da tabuada:\n" +
//     "Informe o valor que você deseja calcular: "
// );

// const tabuada = prompt(
//   "Até que numero você deseja que o " + numero + " deve multiplicar?"
// );

// let resultado = "";

// for (let multiplicacao = 1; multiplicacao <= tabuada; multiplicacao++) {
//   resultado +=
//     " -> " +
//     numero +
//     " * " +
//     multiplicacao +
//     " = " +
//     numero * multiplicacao +
//     "\n";
// }

// alert("Resultado da tabuada de " + numero + "\n\n" + resultado);

const numero = parseFloat(
  prompt(
    "Olá, eu sou o robô da tabuada:\n" +
      "Informe o valor que você deseja calcular: "
  )
);

const tabuada = prompt(
  "Até que numero você deseja que o " + numero + " deve multiplicar?"
);

const escolhas = prompt(
  "o que vocè deseja fazer?\n" +
    "Somar (+):\n" +
    "Subtrair (-):\n" +
    "Multiplicar (*):\n" +
    "Dividir (/):"
);

let resultado = "";

for (let multiplicacao = 1; multiplicacao <= tabuada; multiplicacao++) {
  if (escolhas == "+") {
    resultado +=
      " -> " +
      numero +
      " + " +
      multiplicacao +
      " = " +
      (numero + multiplicacao) +
      "\n";
  } else if (escolhas == "-") {
    resultado +=
      " -> " +
      numero +
      " - " +
      multiplicacao +
      " = " +
      (numero - multiplicacao) +
      "\n";
  } else if (escolhas == "*") {
    resultado +=
      " -> " +
      numero +
      " * " +
      multiplicacao +
      " = " +
      numero * multiplicacao +
      "\n";
  } else if (escolhas == "/") {
    resultado +=
      " -> " +
      numero +
      " / " +
      multiplicacao +
      " = " +
      numero / multiplicacao +
      "\n";
  }
}

alert("Resultado da tabuada de " + numero + "\n\n" + resultado);
