import calculate from "./calculate.js";

const input = document.getElementById("input");

function handleButtonPress(ev) {
  const value = ev.currentTarget.dataset.value; // Retorna o elemento ao qual o evento está associado.
  input.value += value; // Adiciona o valor do botão ao valor do input
}

function handleClearButton() {
  input.value = ""; // Limpa o valor do input
  input.focus(); // Foca no input
}

function handLeTypin(ev) {
  ev.preventDefault(); // Previne o comportamento padrão
  const allowedKeys = [
    "(",
    ")",
    "/",
    "*",
    "-",
    "+",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    "%",
    " ",
  ];
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key; // Adiciona o valor da tecla ao input se permitido
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1); // Remove o último caractere do input
  }
  if (ev.key === "Enter") {
    calculate(); // Chama a função de cálculo se a tecla "Enter" for pressionada
  }
}

export { handleButtonPress, handleClearButton, handLeTypin };
