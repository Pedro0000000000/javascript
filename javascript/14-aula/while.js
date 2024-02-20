let velocidade = parseFloat(
  prompt(
    "Pise no acelerador e escolha a velocidade que o veículo está." +
      "\n100 km/h " +
      "\n80 km/h " +
      "\n60 km/h " +
      "\n40 km/h " +
      "\n20 km/h "
  )
);

while (velocidade > 0) {
  alert("O veiculo esta a " + velocidade + " km/h");
  velocidade -= 20;
  alert("Diminuindo 20 km/h");

  if (velocidade === 40) {
    alert("O veiculo atingiu a velocidade 40 km/h ");
    break;
  }
}

// velocidade = 40;
// alert("O veiculo atingiu a velocidade 0 e esta parado");
