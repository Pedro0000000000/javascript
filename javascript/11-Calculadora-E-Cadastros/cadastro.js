// let Name = "";
// let SobName = "";
// let CampDeEstudo = "";
// let AnoDeNascimento = "";

// Name = window.prompt("Insira Seu Primeiro Nome: ");
// SobName = window.prompt("Insira Seu Segundo Nome: ");
// CampDeEstudo = window.prompt("Insira Seu Acampamento de Estudo: ");
// AnoDeNascimento = window.prompt("Insira Seu Ano De Nascimento: ");

// // let namere = " Suas Informações Foram salvas Em Nosso Sistema!";
// let Namee = "Primeiro Nome: ";
// let SobNamee = "Segundo Nome: ";
// let CampDeEstudoo = "Acampamento De Estudo: ";
// let AnoDeNascimentoo = "Ano De Nascimento: ";

// console.log(Namee + Name);
// console.log(SobNamee + SobName);
// console.log(CampDeEstudoo + CampDeEstudo);
// console.log(AnoDeNascimentoo + AnoDeNascimento);

// console.log("----------------------------------------------");

// // ouoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

// let Name2 = " ";
// let SobName2 = " ";
// let CampDeEstudo2 = " ";
// let AnoDeNascimento2 = " ";

// Name2 = window.prompt("Insira Seu Primeiro Nome: ");
// SobName2 = window.prompt("Insira Seu Segundo Nome: ");
// CampDeEstudo2 = window.prompt("Insira Seu Acampamento de Estudo: ");
// AnoDeNascimento2 = window.prompt("Data De Nascimento: ");

// let Namee2 = "Nome Completo: ";
// let CampDeEstudoo2 = "Campo De Estudo: ";
// let AnoDeNascimentoo2 = "Ano De Nascimento: ";

// console.log(Namee2 + Name2 + " " + SobName2);
// console.log(CampDeEstudoo2 + CampDeEstudo2);
// console.log(AnoDeNascimentoo2 + AnoDeNascimento2);

// console.log("----------------------------------------------");

// ouoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
const PrimeiroNome = prompt("Primeiro Nome: ");
const SobreNome = prompt("Segundo Nome: ");
const CampDeEstudo = prompt("Campo De Estudo: ");
const AnoDeNascimento = prompt("Ano De Nascimento");

alert(
  "Cadastrado Com Sucesso! \n" +
    "Nome Completo: " +
    PrimeiroNome +
    " " +
    SobreNome +
    "\n" +
    "Campo De Estudo: " +
    CampDeEstudo +
    "\n" +
    "Idade: " +
    (2024 - AnoDeNascimento)
);

// const PrimeiroNome = prompt("Primeiro Nome: ");
// const SobreNome = prompt("Segundo Nome: ");
// const CampDeEstudo = prompt("Campo De Estudo: ");
// const AnoDeNascimento = prompt("Ano De Nascimento");

// // Obtém a data atual
// const dataAtual = new Date();

// // Calcula a idade em anos, meses e dias
// const anoNascimento = parseInt(AnoDeNascimento);
// const idade = dataAtual.getFullYear() - anoNascimento;
// const mesAtual = dataAtual.getMonth() + 1; // Os meses são indexados de 0 a 11, então adicionamos 1
// const mesNascimento = prompt("Mês de Nascimento (1 a 12): ");
// const diferencaMeses = mesAtual - mesNascimento;

// let idadeAnos = idade;
// let idadeMeses = diferencaMeses;
// let idadeDias = dataAtual.getDate(); // Dia atual

// // Ajusta a idade se ainda não fez aniversário este ano
// if (
//   diferencaMeses < 0 ||
//   (diferencaMeses === 0 &&
//     dataAtual.getDate() < parseInt(prompt("Dia de Nascimento (1 a 31): ")))
// ) {
//   idadeAnos--;
//   idadeMeses = 12 + diferencaMeses; // Ajusta os meses
// }

// alert(
//   "Cadastrado Com Sucesso! \n" +
//     "Nome Completo: " +
//     PrimeiroNome +
//     " " +
//     SobreNome +
//     "\n" +
//     "Campo De Estudo: " +
//     CampDeEstudo +
//     "\n" +
//     "Idade: " +
//     idadeAnos +
//     " anos, " +
//     idadeMeses +
//     " meses, " +
//     (idadeDias - 1) +
//     " dias" // Subtrai 1 para obter o número correto de dias
// );
