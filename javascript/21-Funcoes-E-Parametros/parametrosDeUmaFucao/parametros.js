// function dobro(x) {
//   alert("O dobro de " + x + " é " + x * 2);
// }

// dobro(5);
// dobro(8);
// dobro();

// function ola(nome = ", Mundo!") {
//   alert("Olá " + nome);
// }

// ola("Pedro Henrique");
// ola();

// function soma(a, b, c, d) {
//   alert(
//     "Resultado da soma de " +
//       a +
//       " + " +
//       b +
//       " * " +
//       c +
//       " + " +
//       d +
//       " = " +
//       (a + b * c + d)
//   );
// }

// soma(2, 4, 5, 2);

// function cadastro(name, idade, email, type = "admin") {
//   const usuario = {
//     name,
//     idade,
//     email,
//     type,
//   };

//   console.log(usuario);
// }
// cadastro("Pedro Henrique", "19", "pedro@gmail.com", "usuario");

// function cadastrarUsuario(usuario) {
//   // Aqui você pode implementar lógica para realmente cadastrar o usuário em algum lugar
//   console.log("Cadastrando usuário:", usuario.nome);
//   console.log("Idade:", usuario.idade);
//   console.log("Email:", usuario.email);
//   console.log("Senha:", usuario.senha);
//   console.log("Cidade:", usuario.cidade);
// }

// const dadosDoUsuario = {
//   nome: "Pedro Henrique",
//   idade: 19, // Idade como número, não string
//   email: "pedro@gmail.com",
//   senha: "123",
//   cidade: "Logo Ali",
// };

function cadastrarUsuario(usuario) {
  console.log("Cadastrando usuário:", usuario.nome.nomeCompleto);
  console.log("Idade:", usuario.nome.idade);
  console.log("Email:", usuario.nome.email);
  console.log("Senha:", usuario.nome.senha);
  console.log("Cidade:", usuario.nome.cidade);
}

function obterDadosDoUsuario() {
  const nomeCompleto = prompt("Informe Seu Nome Completo:");
  const idade = parseFloat(prompt("Informe Sua Idade:"));
  const email = prompt("Informe seu Email:");
  const senha = prompt("Informe Sua Senha:");
  const cidade = prompt("Informe Sua Cidade:");

  return {
    nome: {
      nomeCompleto: nomeCompleto,
      idade: idade,
      email: email,
      senha: senha,
      cidade: cidade,
    },
  };
}

const dadosDoUsuario = obterDadosDoUsuario();
cadastrarUsuario(dadosDoUsuario);

// cadastrarUsuario(dadosDoUsuario);

// function cadastros(usuario) {
//   usuario.nome;
//   usuario.idade;
//   usuario.email;
//   usuario.senha;
//   usuario.cidade;
// }

// const dadosDoUsuario = {
//   nome: "Pedro Henrique",
//   idade: "19",
//   email: "pedro@gmail.com",
//   senha: "123",
//   cidade: "Logo Ali",
// };

// cadastros(dadosDoUsuario);
// console.log(cadastros);
