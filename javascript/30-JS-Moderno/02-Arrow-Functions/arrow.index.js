// Definição de função tradicional para soma
function normalSum(a, b) {
  return a + b;
}

// Chamada da função normalSum com parâmetros 2 e 3
console.log(`Soma Normal: ${normalSum(2, 3)}`);

// Definição de função anônima (atribuída a uma constante) para soma
const anonymousSum = function (c, d) {
  return c + d;
};

// Chamada da função anonymousSum com parâmetros 20 e 3
console.log(`Soma Anônima: ${anonymousSum(20, 3)}`);

// Definição de função de seta (arrow function) para multiplicação
const arrowSum = (a, b) => {
  return a * b;
};

// Chamada da função arrowSum com parâmetros 2 e 3
console.log(`Multiplicação Arrow Function: ${arrowSum(2, 3)}`);

// Definição de arrow function para subtração de forma simplificada
const subtract = (a, b) => a - b;

// Chamada da função subtract com parâmetros 24 e 3
console.log(`Subtração: ${subtract(24, 3)}`);

// Definição de arrow function que retorna uma string com o dobro do número passado como parâmetro
const double = (d) => `O dobro de ${d} é ${d * 2}`;

// Solicita ao usuário um número para dobrar e exibe o resultado usando a função double
const number = prompt("Digite um número para ser dobrado:");
console.log(double(number));

// Array de cidades
const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

// Filtra cidades que começam com a letra "P"
const startingWithP = towns.filter((town) => town[0] === "P");

// Exibe as cidades que começam com a letra "P"
console.log(startingWithP);
