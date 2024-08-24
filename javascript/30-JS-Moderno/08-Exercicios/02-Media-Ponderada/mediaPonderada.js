// Variável para armazenar a entrada do usuário
let input;
// Array para armazenar os valores e pesos inseridos pelo usuário
let entries = [];

// Loop para solicitar entradas até que o usuário cancele
do {
  // Solicita ao usuário que insira um valor e um peso separados por vírgula
  input = prompt(
    "Insira um valor seguido de um peso, separados por vírgula. Exemplo: 9,3"
  );

  // Se o usuário cancelar o prompt, encerra o loop
  if (input === null) {
    break;
  }

  // Divide a entrada em partes com base na vírgula e converte cada parte para número
  const [number, weight] = input.split(",").map(parseFloat);

  // Verifica se o número é válido
  if (!isNaN(number)) {
    // Adiciona o número e o peso ao array de entradas
    entries.push({ number, weight });
  } else {
    // Exibe um alerta se o número não for válido
    alert("Insira um número válido.");
  }
} while (input !== null); // Continua o loop até que o usuário cancele

// Função para calcular a média ponderada
const weightedAverage = (entries) => {
  // Calcula a soma ponderada dos números
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  );

  // Calcula a soma dos pesos
  const weightSum = entries.reduce(
    (accum, { weight }) => accum + (weight ?? 1),
    0
  );

  // Retorna a média ponderada (soma ponderada / soma dos pesos)
  return sum / weightSum;
};

// Se houver entradas válidas, calcula e exibe a média ponderada
if (entries.length > 0) {
  console.log(`Média Ponderada: ${weightedAverage(entries)}`);
} else {
  // Caso contrário, exibe uma mensagem informando que não há números válidos
  console.log(
    "Nenhum número válido foi inserido para calcular a média ponderada."
  );
}

// Código comentado para a função `weightedAverage` que usa parâmetros rest
// O código atual usa um array de objetos, enquanto este código usa parâmetros individuais

// const weightedAverage = (...entries) => {
//   const sum = entries.reduce(
//     (accum, { number, weight }) => accum + number * (weight ?? 1),
//     0
//   );
//   const weightSum = entries.reduce(
//     (accum, entry) => accum + (entry.weight ?? 1),
//     0
//   );
//   return sum / weightSum;
// };

// console.log(
//   `Média Ponderada: ${weightedAverage(
//     { number: 9, weight: 3 },
//     { number: 7 },
//     { number: 10, weight: 1 }
//   )}`
// );
