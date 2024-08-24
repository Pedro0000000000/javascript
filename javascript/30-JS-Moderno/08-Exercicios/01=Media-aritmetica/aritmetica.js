let input;
let numbers = [];

do {
  input = prompt(
    "Insira um número ou clique em 'Cancelar' para calcular a média:"
  );

  if (input === null) {
    // O usuário clicou em "Cancelar", então paramos o loop.
    break;
  } else if (input !== "" && !isNaN(input)) {
    // Adiciona o número ao array se for válido.
    numbers.push(parseFloat(input));
  }
} while (true);

// Função para calcular a média aritmética
const media = (...numbers) => {
  const sum = numbers.reduce((acumulador, atual) => acumulador + atual, 0);
  return sum / numbers.length;
};

// Verifica se há números para calcular a média
if (numbers.length > 0) {
  console.log(`Média Aritmética Simples: ${media(...numbers)}`);
} else {
  console.log("Nenhum número válido foi inserido para calcular a média.");
}
