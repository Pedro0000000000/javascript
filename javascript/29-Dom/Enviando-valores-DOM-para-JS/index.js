function register(element) {
  const userName = element.children.username.value;
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("Usuario " + userName + " registrado com sucesso!");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("passwordConfirmation").value = "";
  } else {
    alert("As senhas não conferem!");
  }
}
// const usuarios = {};

// function registrar() {
//   const nomeDeUsuario = document.getElementById("username").value;
//   const senha = document.getElementById("password").value;
//   const confirmacaoSenha = document.getElementById(
//     "passwordConfirmation"
//   ).value;

//   if (senha === confirmacaoSenha) {
//     if (nomeDeUsuario in usuarios) {
//       alert("Nome de usuário já existe!");
//     } else {
//       usuarios[nomeDeUsuario] = {
//         senha: senha,
//       };
//       alert("Usuário " + nomeDeUsuario + " registrado com sucesso!");
//     }

//     document.getElementById("username").value = "";
//     document.getElementById("password").value = "";
//     document.getElementById("passwordConfirmation").value = "";
//   } else {
//     alert("As senhas não conferem!");
//   }

//   console.log(usuarios); // Para visualizar os usuários registrados no console
// }
