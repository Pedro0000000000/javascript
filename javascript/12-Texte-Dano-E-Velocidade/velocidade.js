const veiculo1 = prompt("Insira o Nome do Primeiro Veiculo: ");
let velocidadeDoVeiculo1 = parseFloat(
  prompt("Insira a Velocidade do Primeiro Veiculo: ")
);

const veiculo2 = prompt("Insira o Nome do Segundo Veiculo: ");
let velocidadeDoVeiculo2 = parseFloat(
  prompt("Insira a Velocidade do Segundo Veiculo: ")
);

if (velocidadeDoVeiculo1 > velocidadeDoVeiculo2) {
  alert(veiculo1 + " É Mais Rapido do que o Veiculo " + veiculo2);
} else if (velocidadeDoVeiculo2 > velocidadeDoVeiculo1) {
  alert(veiculo2 + " É Mais Rapido do Que o Veiculo " + veiculo1);
} else if (velocidadeDoVeiculo1 == velocidadeDoVeiculo2) {
  alert(veiculo1 + " e " + veiculo2 + " Possuem a Mesma Velocidade");
}
