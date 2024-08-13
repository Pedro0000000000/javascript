// Variáveis globais úteis
const boardRegions = document.querySelectorAll("#gameBoard span");
let vBoard = [];
let turnPlayer = "";

// Função para atualizar o título com o nome do jogador atual
function updateTitle() {
  const playerInput = document.getElementById(turnPlayer);
  document.getElementById("turnPlayer").textContent = playerInput.value;
}

// Função para desabilitar uma região do tabuleiro após ser jogada
function disableRegion(element) {
  element.classList.remove("cursor-pointer");
  element.removeEventListener("click", handleBoardClick);
}

// Função para verificar se algum jogador venceu
function checkWin() {
  const winConditions = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ], // Linhas
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ], // Colunas
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ], // Diagonais
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (
      vBoard[a[0]][a[1]] &&
      vBoard[a[0]][a[1]] === vBoard[b[0]][b[1]] &&
      vBoard[a[0]][a[1]] === vBoard[c[0]][c[1]]
    ) {
      return condition.map((coord) => coord.join("."));
    }
  }
  return null;
}

// Função principal para processar o clique nas regiões do tabuleiro
function handleBoardClick(ev) {
  const span = ev.currentTarget;
  const [row, col] = span.dataset.region.split(".");

  if (vBoard[row][col]) return; // Impede jogada na mesma célula

  const currentPlayer = turnPlayer === "player1" ? "X" : "O";
  vBoard[row][col] = currentPlayer;
  span.textContent = currentPlayer;

  const winRegions = checkWin();
  if (winRegions) {
    handleWin(winRegions);
  } else if (vBoard.flat().every((cell) => cell !== "")) {
    document.querySelector("h2").textContent = "Empate!";
  } else {
    turnPlayer = turnPlayer === "player1" ? "player2" : "player1";
    updateTitle();
  }
  disableRegion(span);
}

// Pinta as regiões onde o jogador venceu e mostra seu nome na tela
function handleWin(regions) {
  regions.forEach(function (region) {
    document
      .querySelector('[data-region="' + region + '"]')
      .classList.add("win");
  });
  const playerName = document.getElementById(turnPlayer).value;
  document.querySelector("h2").textContent = playerName + " venceu!";
}

// Inicializa o jogo
function initializeGame() {
  // Inicializa as variáveis globais
  vBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  turnPlayer = "player1";
  // Ajusta o título da página
  document.querySelector("h2").innerHTML =
    'Vez de: <span id="turnPlayer"></span>';
  updateTitle();
  // Limpa o tabuleiro e adiciona os eventos de clique
  boardRegions.forEach(function (element) {
    element.classList.remove("win");
    element.textContent = "";
    element.classList.add("cursor-pointer");
    element.addEventListener("click", handleBoardClick);
  });
}

// Adiciona o evento no botão que inicia o jogo
document.getElementById("start").addEventListener("click", initializeGame);
