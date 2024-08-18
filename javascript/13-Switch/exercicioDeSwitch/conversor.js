const medida = parseFloat(prompt("Insira uma medida em metros:"));

const opcoesDeMedidas = prompt(
  "Para qual unidade de medida você deseja converter? " +
    "\n1 - Milimetros (mm)" +
    "\n2 - Centimetros (cm)" +
    "\n3 - Decimetro (dm)" +
    "\n4 - Decâmetro (dam)" +
    "\n5 - Hectrômetros (hm)" +
    "\n6 - Quilometros (km)" +
    "\n7 - Todas as opções acima."
);

switch (opcoesDeMedidas) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm");
    break;
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm");
    break;
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm");
    break;
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam");
    break;
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm");
    break;
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km");
    break;
  case "7":
    alert(
      "Resultado: " +
        medida +
        "m = " +
        medida * 1000 +
        "mm" +
        "\nResultado: " +
        medida +
        "m = " +
        medida * 100 +
        "cm" +
        "\nResultado: " +
        medida +
        "m = " +
        medida * 10 +
        "dm" +
        "\nResultado: " +
        medida +
        "m = " +
        medida / 10 +
        "dam" +
        "\nResultado: " +
        medida +
        "m = " +
        medida / 100 +
        "hm" +
        "\nResultado: " +
        medida +
        "m = " +
        medida / 1000 +
        "km"
    );
}
