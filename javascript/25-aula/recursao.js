function dividir(number) {
  console.log(number);
  if (number % 2 === 0) {
    dividir(number / 2);
  } else {
    return number;
  }
}
// dividir(8);

function dobrar(numberr) {
  console.log(numberr);
  if (numberr === 1000) {
    return numberr;
  } else if (numberr < 1000) {
    return dobrar(numberr * 2);
  } else {
    return "O numero passou de mil.";
  }
}

// dobrar(1);

// fatorioal de 5 ==> !5 === 5 * 4 * 3 * 2 * 1 === 5 * !4

function fatorial(numero) {
  console.log("Numero: " + numero);
  if (numero === 0) {
    return 1;
  } else if (numero === 1) {
    return 1;
  } else {
    console.log(numero + " * " + "!" + (numero - 1));
    return numero * fatorial(numero - 1);
  }
}

console.log(fatorial(5));
