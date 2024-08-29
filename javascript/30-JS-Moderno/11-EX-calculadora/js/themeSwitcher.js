export default function () {
  // Seleciona o elemento <main> e o elemento raiz do documento
  const main = document.querySelector("main");
  const root = document.querySelector(":root");

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
}
