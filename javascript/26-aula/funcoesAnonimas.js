function somar(a, b) {
  return a + b;
}

console.log(somar);
console.log(somar(3, 4));

const operecao = somar;
console.log(operecao(5, 3));

const subtrair = function (a, b) {
  return "O resultado da subtração de " + a + " - " + b + " = " + (a - b);
};

const a = parseFloat(prompt("Insira um valor: "));
const b = parseFloat(prompt("Insira outro valor: "));

console.log(subtrair(a, b));

// PERIGO DAS FUNÇÕES ANONIMAS

olaMundo();
// oiMundo();   // Você só consegue acessar depois que a função for declarada.

function olaMundo() {
  console.log("Olá, Mundo!"); //função Nomeada é jogada lá para o começo do arquivo
}

const oiMundo = function () {
  console.log("Oi, Mundo!"); // já a função anonima ela não é jogada para o começo
};

oiMundo();
