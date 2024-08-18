const entrada1 = prompt("Informe o Primeiro Numero: ");
const entrada2 = prompt("Informe o Segundo Numero: ");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const subitracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  "A Soma de " +
    x +
    " e " +
    y +
    " = " +
    soma +
    " " +
    "\nA Subitração de " +
    x +
    " e " +
    y +
    " = " +
    subitracao +
    "\nA Multiplicação " +
    x +
    " e " +
    y +
    " = " +
    multiplicacao +
    "\nA Divisão: " +
    x +
    " e " +
    y +
    " = " +
    divisao
);
