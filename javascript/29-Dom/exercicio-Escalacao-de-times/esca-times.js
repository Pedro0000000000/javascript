function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const nunber = document.getElementById("nunber").value;

  // console.log({ position, name, nunber });
  const confirmacao = confirm(
    "Escalar " +
      name +
      " na posição " +
      position +
      " com a camisa " +
      nunber +
      " ?"
  );
  if (confirmacao) {
    const teamList = document.getElementById("teamList");
    const playIten = document.createElement("li");
    playIten.id = "player-" + nunber;
    playIten.innerText = position + ": " + name + " (" + nunber + ")";
    teamList.appendChild(playIten);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("nunber").value = "";
  }
}

function removePlayer() {
  const nunber = document.getElementById("nunberToRemove").value;
  const playerToRemove = document.getElementById("player-" + nunber);

  const confirmation = confirm(
    "Remover o jogador " + playerToRemove.innerText + " ?"
  );

  if (confirmation) {
    document.getElementById("teamList").removeChild(playerToRemove);
    document.getElementById("nunberToRemove").value = "";
  }
}
