// Seleciona o elemento <main> e o elemento raiz do documento
const main = document.querySelector("main");
const root = document.querySelector(":root");

// Seleciona os elementos de entrada e de resultado
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

// Define as teclas permitidas para entrada de valores
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

// Adiciona um evento de clique a cada botão com a classe "charKey"
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value; // Adiciona o valor do botão ao valor do input
  });
});

// Adiciona um evento de clique ao botão "clear" para limpar o input
document.getElementById("clear").addEventListener("click", function () {
  input.value = ""; // Limpa o valor do input
  input.focus(); // Foca no input
});

// Adiciona um evento de tecla ao input
input.addEventListener("keydown", function (ev) {
  ev.preventDefault(); // Previne o comportamento padrão
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
});

// Adiciona um evento de clique ao botão "equal" para calcular o resultado
document.getElementById("equal").addEventListener("click", calculate);

// Função para calcular o resultado
function calculate() {
  resultInput.value = "ERROR"; // Define o valor do resultado como "ERROR" por padrão
  resultInput.classList.add("error"); // Adiciona a classe "error" ao input de resultado

  try {
    const result = eval(input.value); // Calcula o resultado da expressão no input
    resultInput.value = result; // Define o valor do input de resultado como o resultado calculado
    input.value = ""; // Limpa o input
    resultInput.classList.remove("error"); // Remove a classe "error" do input de resultado
  } catch {
    resultInput.value = "ERROR"; // Se houver um erro, mantém o valor como "ERROR"
  }

  input.focus(); // Foca no input
}

// Adiciona um evento de clique ao botão de troca de tema
document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    // Altera as variáveis CSS para o tema claro
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light"; // Atualiza o atributo de tema
  } else {
    // Altera as variáveis CSS para o tema escuro
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark"; // Atualiza o atributo de tema
  }
});

// Adiciona um evento de clique ao botão de copiar para a área de transferência
document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied!"; // Atualiza o texto do botão
      button.classList.add("success"); // Adiciona a classe "success" ao botão
      navigator.clipboard.writeText(resultInput.value); // Copia o valor do input de resultado para a área de transferência
    } else {
      button.innerText = "Copy"; // Restaura o texto do botão
      button.classList.remove("success"); // Remove a classe "success" do botão
    }
  });
