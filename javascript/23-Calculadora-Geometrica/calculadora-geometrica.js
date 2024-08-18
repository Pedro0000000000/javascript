function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"));
  const altura = parseFloat(prompt("Informe a altura do triângulo:"));
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe a base do retângulo:"));
  const altura = parseFloat(prompt("Informe a altura do retângulo:"));
  return base * altura;
}

function calcularAreaQuadrado() {
  const base = parseFloat(prompt("Informe a Lado do quadrado:"));
  return base * 4;
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior do trapezio:"));
  const baseMenor = parseFloat(prompt("Informe a base menir do trapezio:"));
  const altura = parseFloat(prompt("Informe a altura do trapezio:"));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do circulo:"));
  return 3, 14 * raio * raio;
}

function menu() {
  return prompt(
    "Calculadora Geometrica.\n" +
      "1. Calcular Area do Triângulo.\n" +
      "2. Calcular Area do Retâmgulo.\n" +
      "3. Calcular area do Quadrado.\n" +
      "4. Calclar Area do Trapézio.\n" +
      "5. Calcular Area do Circulo.\n" +
      "6. Sair.\n"
  );
}

function executar() {
  let opcao = " ";

  do {
    opcao = menu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção Invalida. Tente Novamente.");
    }

    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
