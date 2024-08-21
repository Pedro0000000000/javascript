// Define a função sum que aceita qualquer número de argumentos
function sum(...numbers) {
  // Usa reduce para somar todos os números do array numbers
  return numbers.reduce((accum, num) => accum + num, 0);
}

// Testes da função sum com diferentes quantidades de argumentos
console.log(sum(1, 1)); // Saída: 2
console.log(sum(2, 2, 2, 2, 2)); // Saída: 10
console.log(sum(32, 5, 74, 7, 1, 9, 90)); // Saída: 218
