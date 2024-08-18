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

// Chamando a função nomeada antes de sua definição
olaMundo(); // Funciona devido ao hoisting

// Tentando chamar a função anônima antes da definição (comentada para evitar erro)
// oiMundo(); // Causaria um erro se descomentado: Uncaught ReferenceError: Cannot access 'oiMundo' before initialization

// Definição da função nomeada
function olaMundo() {
  console.log("Olá, Mundo!"); //função Nomeada é jogada lá para o começo do arquivo
}

// Definição da função anônima atribuída a uma variável
const oiMundo = function () {
  console.log("Oi, Mundo!"); // já a função anonima ela não é jogada para o começo
};

// Chamando a função anônima após sua definição
oiMundo(); // Funciona
