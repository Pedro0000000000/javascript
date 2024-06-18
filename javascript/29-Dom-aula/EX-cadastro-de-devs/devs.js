// Função para criar um elemento <label>
function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

// Função para criar um elemento <input>
function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

// Seleciona o botão "Adicionar" e o formulário pelo ID
const addTechBtn = document.getElementById("addTechBtn");
const form = document.getElementById("devForm");

// Array para armazenar os desenvolvedores cadastrados
const developers = [];
// Contador para acompanhar o número de linhas de entrada de tecnologias
let inputRows = 0;

// Adiciona um ouvinte de evento ao botão "Adicionar"
addTechBtn.addEventListener("click", function () {
  const stackInputs = document.getElementById("stackInputs");

  // Cria uma nova linha de entrada de tecnologia
  const newRow = document.createElement("li");
  const rowIndex = inputRows++; // Incrementa o contador de linhas
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  // Cria e adiciona os elementos de rótulo e entrada para o nome da tecnologia
  const techNameLabel = createLabel("Nome: ", "techName-" + rowIndex);
  const techNameInput = createInput("techName-" + rowIndex, null, "techName");

  // Cria e adiciona os elementos de rótulo e entrada para os botões de rádio de experiência
  const expLabel = createLabel("Experiência");
  const id1 = "expRadio-" + rowIndex + "-1";
  const expRadio1 = createInput(
    id1,
    "0-2 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel1 = createLabel("0-2 anos", id1);

  const id2 = "expRadio-" + rowIndex + "-2";
  const expRadio2 = createInput(
    id2,
    "3-4 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel2 = createLabel("3-4 anos", id2);

  const id3 = "expRadio-" + rowIndex + "-3";
  const expRadio3 = createInput(id3, "5+ anos", "techExp-" + rowIndex, "radio");
  const expLabel3 = createLabel("5+ anos", id3);

  // Cria e adiciona um botão "Remover" para permitir a remoção da linha
  const removeRowBtn = document.createElement("button");
  removeRowBtn.type = "button";
  removeRowBtn.innerText = "Remover";
  removeRowBtn.addEventListener("click", function () {
    stackInputs.removeChild(newRow);
  });

  // Adiciona todos os elementos criados na nova linha
  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeRowBtn
  );

  // Adiciona a nova linha à lista de tecnologias
  stackInputs.appendChild(newRow);
});

// Adiciona um ouvinte de evento ao formulário para o evento de submissão
form.addEventListener("submit", function (ev) {
  ev.preventDefault(); // Previne o comportamento padrão de recarregar a página

  // Seleciona o campo de nome completo e todas as linhas de entrada de tecnologia
  const fullNameInput = document.getElementById("fullname");
  const inputRows = document.querySelectorAll(".inputRow");

  // Coleta os valores dos campos de tecnologia e experiência
  let tecnologias = [];
  inputRows.forEach(function (row) {
    const techName = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;
    tecnologias.push({ name: techName, exp: techExp });
  });

  // Cria um novo objeto desenvolvedor com o nome completo e as tecnologias coletadas
  const newDev = { fullName: fullNameInput.value, tecnologias: tecnologias };

  // Adiciona o novo desenvolvedor ao array de desenvolvedores
  developers.push(newDev);
  alert("Desenvolvedor cadastrado com sucesso!");

  // Limpa o campo de nome completo e remove todas as linhas de entrada de tecnologia
  fullNameInput.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });

  // Imprime o array de desenvolvedores no console para verificação
  console.log(developers);
});
