// Função principal que recebe dois números e uma função de operação como parâmetros.
function calcular(a, b, operacao) {
  // Loga no console que uma operação está sendo realizada.
  console.log("Realizando uma operação.");
  // Executa a operação recebida como parâmetro com os números a e b.
  const resultado = operacao(a, b);
  // Retorna o resultado da operação.
  return resultado;
}

// Função que realiza a soma de dois números.
function somar(x, y) {
  // Loga no console que uma soma está sendo realizada.
  console.log("Realizando a soma.");
  // Retorna a soma dos dois números.
  return x + y;
}

// Chama a função calcular passando os números 3 e 34, e a função somar como operação.
console.log(calcular(3, 34, somar));

// Função que realiza a subtração de dois números.
function subtrair(c, d) {
  // Loga no console que uma subtração está sendo realizada.
  console.log("Realizando uma subtração.");
  // Retorna a subtração do segundo número pelo primeiro.
  return c - d;
}

// Chama a função calcular passando os números 18 e 7, e a função subtrair como operação.
console.log(calcular(18, 7, subtrair));

console.log("=====================================================");

// Chama a função calcular passando os números 18 e 7, e uma função anônima que realiza subtração.
console.log(
  calcular(18, 7, function (c, d) {
    // Loga no console que uma subtração está sendo realizada.
    console.log("Realizando uma subtração.");
    // Retorna a subtração do segundo número pelo primeiro.
    return c - d;
  })
);

console.log("=====================================================");

// Função que exibe detalhes de um elemento de um array.
function exibirElemento(elementos, Indice, array) {
  // Loga no console um objeto contendo o elemento, seu índice e o array completo.
  console.log({
    elementos,
    Indice,
    array,
  });
}

// Array de frutas.
const lista = ["Maçã", "Banana", "Laranja", "Limão"];

// Loop for que percorre cada elemento do array.
for (let i = 0; i < lista.length; i++) {
  // Chama a função exibirElemento passando o elemento atual, seu índice e o array completo.
  exibirElemento(lista[i], i, lista);
}

console.log("=====================================================");

// Método forEach que chama a função exibirElemento para cada elemento do array.
lista.forEach(exibirElemento); // Para cada item da lista, ele chama a função exibirElemento.

console.log("=====================================================");

// Método forEach com uma função anônima que exibe detalhes de cada elemento do array.
lista.forEach(function (elementos, Indice, array) {
  // Loga no console um objeto contendo o elemento, seu índice e o array completo.
  console.log({
    elementos,
    Indice,
    array,
  });
});
