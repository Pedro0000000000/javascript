function calcular(a, b, operacao) {
  console.log("Realizando uma operação.");
  const resultado = operacao(a, b);
  return resultado;
}

function somar(x, y) {
  console.log("Realizando a soma.");
  return x + y;
}

console.log(calcular(3, 34, somar));

function subtrair(c, d) {
  console.log("Realizando uma subtração.");
  return c - d;
}

console.log(calcular(18, 7, subtrair));

console.log(
  calcular(18, 7, function (c, d) {
    console.log("Realizando uma subtração.");
    return c - d;
  })
);

function exibirElemento(elementos, Indice, array) {
  console.log({
    elementos,
    Indice,
    array,
  });
}

const lista = ["Maçã", "Banana", "Laranja", "Limão"];

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}

lista.forEach(exibirElemento);

lista.forEach(function (elementos, Indice, array) {
  console.log({
    elementos,
    Indice,
    array,
  });
});
