const imoveis = [];
let opcoes = "";

do {
  opcoes = prompt(
    "Seja Bem-Vindo a MAIOR corretora de imoveis do Brasil.\n\n" +
      "Total de imoveis cadastrados: " +
      imoveis.length +
      "\nEscolha uma das opções Abaixo\n 1- Novo imovel!\n 2- Imoveis cadastrados\n 3- Sair"
  );

  switch (opcoes) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt(
        "Informe o nome do proprietário do imóvel: "
      );
      imovel.quartos = prompt("Informe a quantidade de quartos desse imóvel: ");
      imovel.banheiro = prompt(
        "Informe a quantidade de banheiros desse imóvel: "
      );
      imovel.garagem = {};

      let temGaragem = prompt("Possui garagem? (Sim/Não)");
      if (temGaragem === "Sim") {
        imovel.garagem = prompt("Quantas vagas de garagem?") || "0";
      } else {
        imovel.garagem = "0";
      }

      let confirmacao = prompt(
        `Salvar este imóvel? (Sim/Não)\n` +
          `Proprietário: ${imovel.proprietario}\n` +
          `Quartos: ${imovel.quartos}\n` +
          `Banheiros: ${imovel.banheiro}\n` +
          `Garagem: ${imovel.garagem}`
      );

      if (confirmacao === "Sim") {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso!\nVoltando ao menu!");
      }
      break;

    case "2":
      if (imoveis.length === 0) {
        alert("Nenhum imóvel cadastrado.");
      } else {
        for (let i = 0; i < imoveis.length; i++) {
          alert(
            `Imóvel ${i + 1}\n` +
              `Proprietário: ${imoveis[i].proprietario}\n` +
              `Quartos: ${imoveis[i].quartos}\n` +
              `Banheiros: ${imoveis[i].banheiro}\n` +
              `Garagem: ${imoveis[i].garagem}`
          );
        }
      }
      break;

    case "3":
      const confirmacaoSair = confirm("Deseja realmente sair?");
      if (confirmacaoSair) {
        opcoes = "3"; // Sair do loop
      } else {
        opcoes = "";
        alert("Voltando para o menu!");
      }
      break;

    default:
      alert("Opção inválida, tente novamente.");
  }
} while (opcoes !== "3");

// const imoveis = [];
// let opcoes = "";

// do {
//   opcoes = prompt(
//     "Seja Bem-Vindo a MAIOR corretora de imoveis do Brasil.\n\n" +
//       "Total de imoveis cadastrados: " +
//       imoveis.length +
//       "\nEscolha uma das opções Abaixo\n 1- Novo imovel!\n 2- Imoveis cadastrados\n 3- Sair"
//   );

//   switch (opcoes) {
//     case "1":
//       const imovel = {};
//       imovel.proprietario = prompt(
//         "Informe o nome do proprietário do imóvel: "
//       );
//       imovel.quartos = prompt("Informe a quantidade de quartos desse imóvel: ");
//       imovel.banheiro = prompt(
//         "Informe a quantidade de banheiros desse imóvel: "
//       );
//       imovel.garagem = {};
//       imovel.garagem.temGaragem = prompt("Possui garagem? (Sim/Não)");
//       if (imovel.garagem.temGaragem === "Sim") {
//         imovel.garagem.vagas = prompt("Quantas vagas de garagem?") || "0";
//       } else {
//         imovel.garagem.vagas = "0"; // Define como zero se não possuir garagem
//       }

//       let confirmacao = prompt(
//         `Salvar este imóvel?\n` +
//           `Proprietário: ${imovel.proprietario}\n` +
//           `Quartos: ${imovel.quartos}\n` +
//           `Banheiros: ${imovel.banheiro}\n` +
//           `Garagem: ${
//             imovel.garagem.temGaragem === "Sim"
//               ? "Sim, Vagas: " + imovel.garagem.vagas
//               : "Não"
//           }\n` +
//           `(Sim/Não)`
//       );

//       if (confirmacao === "Sim") {
//         imoveis.push(imovel);
//         alert("Imóvel salvo com sucesso!\nVoltando ao menu!");
//       }
//       break;

//     case "2":
//       if (imoveis.length === 0) {
//         alert("Nenhum imóvel cadastrado.");
//       } else {
//         for (let i = 0; i < imoveis.length; i++) {
//           const possuiGaragem =
//             imoveis[i].garagem.temGaragem === "Sim"
//               ? `Sim, Vagas: ${imoveis[i].garagem.vagas}`
//               : "Não";
//           alert(
//             `Imóvel ${i + 1}\n` +
//               `Proprietário: ${imoveis[i].proprietario}\n` +
//               `Quartos: ${imoveis[i].quartos}\n` +
//               `Banheiros: ${imoveis[i].banheiro}\n` +
//               `Garagem: ${possuiGaragem}`
//           );
//         }
//       }
//       break;

//     case "3":
//       const confirmacaoSair = confirm("Deseja realmente sair?");
//       if (confirmacaoSair) {
//         opcoes = "3"; // Sair do loop
//       } else {
//         opcoes = "";
//         alert("Voltando para o menu!");
//       }
//       break;

//     default:
//       alert("Opção inválida, tente novamente.");
//   }
// } while (opcoes !== "3");

// const imoveis = [];
// let opcoes = "";

// do {
//   opcoes = prompt(
//     "Bem-vindo(a) ao Cadastro de Imoveis\n" +
//       "Imoveis cadastrados: " +
//       imoveis.length +
//       "\nEscolha umas das opções abaixo:\n" +
//       "\n1. Novo imovel.\n2. Imoveis Cadastrados.\n3. Sair. "
//   );

//   switch (opcoes) {
//     case "1":
//       const imovel = {};

//       imovel.proprietario = prompt(
//         "Informe o Nome do Proprietario Desse Imovel:"
//       );
//       imovel.quartos = prompt("Informe a Quantdade de Quartos Desse Imovel:");
//       imovel.banheiro = prompt(
//         "Informe a Quantidade de Banheiro Desse Imovel:"
//       );
//       imovel.garagem = prompt("Esse imovel Possue Garagem? (Sim/Não)");
//       // imovel.garagem.vaga = 0;

//       if (imoveis.garagem === "Sim") {
//         imovel.garagem.vaga = prompt(
//           "Quantas Vagas na Garagem Esse Imovel Possui?"
//         );
//       } // else {
//       //   alert(imovel.garagem.vaga);
//       // }

//       const confirmacao = confirm(
//         "Salvar Este imovel?\n" +
//           "\nPriprietario: " +
//           imovel.proprietario +
//           "\nQuarto(s): " +
//           imovel.quartos +
//           "\nBanheiro(s): " +
//           imovel.banheiro +
//           "\nGaragem(s): " +
//           imovel.garagem +
//           "\nVag(s): " +
//           imovel.garagem.vaga
//       );

//       if (confirmacao) {
//         imoveis.push(imovel);
//       }
//       break;
//     case "2":
//       for (let i = 0; i < imoveis.length; i++) {
//         if (imovel.garagem === "Sim") {
//           alert(
//             "Imovel " +
//               (i + 1) +
//               "\nProprietario: " +
//               imoveis[i].proprietario +
//               "\nQuarto(s): " +
//               imoveis[i].quartos +
//               "\nBanheiro(s): " +
//               imoveis[i].banheiro +
//               "\nGaragem: " +
//               imovel[i].garagem +
//               " Vaga(s): " +
//               imovel[i].garagem.vaga
//           );
//         } else {
//           alert(
//             "Imovel " +
//               (i + 1) +
//               "\nProprietario: " +
//               imoveis[i].proprietario +
//               "\nQuarto(s): " +
//               imoveis[i].quartos +
//               "\nBanheiro(s): " +
//               imoveis[i].banheiro +
//               "\nGaragem: Não"
//           );
//         }
//       }
//       break;
//     case "3":
//       alert("Encerrando...");
//       break;
//     default:
//       alert("Opção imvalda.");
//   }
// } while (opcoes !== "3");
