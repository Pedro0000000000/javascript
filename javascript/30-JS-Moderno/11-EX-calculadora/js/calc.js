import calculate from "./calculate.js";

import copyToClipBoard from "./copyToClipBoard.js";
import {
  handleButtonPress,
  handleClearButton,
  handLeTypin,
} from "./keyHandlers.js";
import themeSwitcher from "./themeSwitcher.js";

// Adiciona um evento de clique a cada botão com a classe "charKey"
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress);
});

// Adiciona um evento de clique ao botão "clear" para limpar o input
document.getElementById("clear").addEventListener("click", handleClearButton);

// Adiciona um evento de tecla ao input
document.getElementById("input").addEventListener("keydown", handLeTypin);

// Adiciona um evento de clique ao botão "equal" para calcular o resultado
document.getElementById("equal").addEventListener("click", calculate);

// Adiciona um evento de clique ao botão de copiar para a área de transferência
document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipBoard);

// Adiciona um evento de clique ao botão de troca de tema
document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);
