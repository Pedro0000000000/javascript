export default function (ev) {
  const resultInput = document.getElementById("result");
  const button = ev.currentTarget;
  if (button.innerText === "Copy") {
    button.innerText = "Copied!"; // Atualiza o texto do botão
    button.classList.add("success"); // Adiciona a classe "success" ao botão
    navigator.clipboard.writeText(resultInput.value); // Copia o valor do input de resultado para a área de transferência
  } else {
    button.innerText = "Copy"; // Restaura o texto do botão
    button.classList.remove("success"); // Remove a classe "success" do botão
  }
}
