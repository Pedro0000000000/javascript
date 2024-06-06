const button = document.getElementById("register-button");

// Função para registrar um usuário
function register(ev) {
  console.log(ev);
  // Obtém o elemento pai do elemento que acionou o evento
  const sectionElement = ev.currentTarget.parentNode;
  // Obtém os valores dos campos de entrada de usuário e senha
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  // Verifica se a senha e a confirmação de senha correspondem
  if (password === passwordConfirmation) {
    alert("Usuário " + username + " cadastrado com sucesso!");
  } else {
    alert("As senhas não conferem");
  }
}

// Adiciona um ouvinte de evento de clique para o botão de registro
button.addEventListener("click", register);

// Função para remover o ouvinte de evento de clique do botão de registro
function removeEvent() {
  // Remove o ouvinte de evento de clique do botão de registro
  button.removeEventListener("click", register);
  console.log("Evento removido");
}

// Adiciona um ouvinte de evento de mouse sobre o botão de registro para exibir o alvo do evento
button.addEventListener("mouseover", function (ev) {
  // Exibe o elemento que acionou o evento de mouse sobre
  console.log(ev.currentTarget);
});
