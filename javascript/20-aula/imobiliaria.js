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
      imovel.garagem.temGaragem = prompt("Possui garagem? (Sim/Não)");
      if (imovel.garagem.temGaragem === "Sim") {
        imovel.garagem.vagas = prompt("Quantas vagas de garagem?") || "0";
      } else {
        imovel.garagem.vagas = "0"; // Define como zero se não possuir garagem
      }

      let confirmacao = prompt(
        `Salvar este imóvel?\n` +
          `Proprietário: ${imovel.proprietario}\n` +
          `Quartos: ${imovel.quartos}\n` +
          `Banheiros: ${imovel.banheiro}\n` +
          `Garagem: ${
            imovel.garagem.temGaragem === "Sim"
              ? "Sim, Vagas: " + imovel.garagem.vagas
              : "Não"
          }\n` +
          `(Sim/Não)`
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
          const possuiGaragem =
            imoveis[i].garagem.temGaragem === "Sim"
              ? `Sim, Vagas: ${imoveis[i].garagem.vagas}`
              : "Não";
          alert(
            `Imóvel ${i + 1}\n` +
              `Proprietário: ${imoveis[i].proprietario}\n` +
              `Quartos: ${imoveis[i].quartos}\n` +
              `Banheiros: ${imoveis[i].banheiro}\n` +
              `Garagem: ${possuiGaragem}`
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
