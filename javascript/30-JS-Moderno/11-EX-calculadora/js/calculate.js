// Função para calcular o resultado
export default function calculate() {
  const resultInput = document.getElementById("result");

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
