const resultado = prompt(
  "1) Quem descobriu o Brasil? Escolha uma das auternativas abaixo:\n\nA) Pedro Álvares Cabral\nB) Cristovão Colombo\nC) Pelé\nD) Lula"
);

// const resultadoNumerico = parseFloat(resultado);

switch (resultado) {
  case "a":
    alert("A alternativa correta 'a' Pedro Álvares Cabral");
    break;
  case "b":
    alert(
      "A alternativa 'b' incorreta, a alternativa correta é 'a' Pedro Álvares Cabral"
    );
    break;
  case "c":
    alert(
      "A alternativa 'c' incorreta, a alternativa correta é 'a' Pedro Álvares Cabral"
    );
    break;
  case "d":
    alert(
      "A alternativa 'd' incorreta, a alternativa correta é 'a' Pedro Álvares Cabral"
    );
    break;
  default:
    alert("Finalizando...");
}

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

const resultadoN = prompt(
  "1) Quem descobriu o Brasil? Escolha uma das auternativas abaixo:\n\n1) Pedro Álvares Cabral\n2) Cristovão Colombo\n3) Pelé\n4) Lula"
);

const resultadoNumerico = parseFloat(resultadoN);

switch (resultadoNumerico) {
  case 1:
    alert("A alternativa correta '1' Pedro Álvares Cabral");
    break;
  case 2:
    alert(
      "A alternativa '2' incorreta, a alternativa correta é '1' Pedro Álvares Cabral"
    );
    break;
  case 3:
    alert(
      "A alternativa '3' incorreta, a alternativa correta é '1' Pedro Álvares Cabral"
    );
    break;
  case 4:
    alert(
      "A alternativa '4' incorreta, a alternativa correta é '1' Pedro Álvares Cabral"
    );
    break;
  default:
    alert("Finalizando...");
}
