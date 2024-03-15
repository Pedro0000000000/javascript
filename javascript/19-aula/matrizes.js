const arr = [
  "1º nivel",
  ["2º nivel", 42, true],
  [
    ["3º nivel", "1º item", "Olá, mundo! 1"],
    ["3º nivel", "2º item", "Oi, mundo! 2"],
  ],
];

// nivel 0
console.log("---Nivel 0");
console.log(arr);
console.log("=====================================================");

// nivel 1
console.log("---Nivel 1");
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log("=====================================================");

// Nivel 2
console.log("---Nivel 2");
console.log(arr[1]);
console.log(arr[1][0]);
console.log(arr[1][1]);
console.log(arr[1][2]);

console.log("=====================================================");

// Nivel 3
console.log("---Nivel 3.0");
console.log(arr[2]);
console.log(arr[2][0]);
console.log(arr[2][0][0]);
console.log(arr[2][0][1]);
console.log(arr[2][0][2]);

console.log("=====================================================");

console.log("---Nivel 3.1");
console.log(arr[2]);
console.log(arr[2][1]);
console.log(arr[2][1][0]);
console.log(arr[2][1][1]);
console.log(arr[2][1][2]);

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];
console.table(matriz);

matriz.push(["l4, c1"]);
matriz[0].push("l1, c5");
console.table(matriz);

matriz[1].push("l2, c5");
matriz[3].push("l4, c2", "l4, c3", "l4, c4");
console.table(matriz);

for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i]);
}

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const resultado = matriz[i][j];
    console.log("Posição (" + i + ", " + j + ") Valor: " + resultado);
  }
}
