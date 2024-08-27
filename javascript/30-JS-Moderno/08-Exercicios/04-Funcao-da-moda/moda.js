const mode = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

console.log(
  `Moda: ${mode(
    1,
    1,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    5,
    4,
    9,
    7,
    4,
    3,
    5,
    2,
    4,
    0,
    4
  )}`
);
console.log("=================================================");

const ranking = (...numbers) => {
  // Passo 1: Cria um objeto para armazenar a frequência de cada número
  const frequency = numbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1; // Incrementa a contagem do número
    return acc;
  }, {});

  // Passo 2: Converte o objeto em um array de pares [número, frequência]
  const quantities = Object.entries(frequency);

  // Passo 3: Ordena o array pela frequência em ordem decrescente
  quantities.sort((a, b) => b[1] - a[1]);

  // Passo 4: Retorna a lista ordenada com as colocações
  return quantities.map((item, index) => {
    return `${index + 1}º lugar: ${item[0]} (apareceu ${item[1]} vezes)`;
  });
};

console.log(
  ranking(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)
);
