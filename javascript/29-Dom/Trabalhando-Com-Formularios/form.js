// Seleciona o formulário pelo ID
const form = document.getElementById("orderForm");

// Adiciona um evento ao formulário para quando ele for submetido
form.addEventListener("submit", function (ev) {
  // Previne o comportamento padrão de recarregar a página ao submeter o formulário
  ev.preventDefault();

  // Obtém o valor do campo de texto 'name'
  const name = document.querySelector('input[name="name"]').value;
  // Obtém o valor do campo de texto 'address'
  const address = document.querySelector('input[name="address"]').value;
  // Obtém o valor selecionado do campo de seleção 'breadType'
  const breadType = document.querySelector('select[name="breadType"]').value;
  // Obtém o valor do campo de rádio 'main' que está selecionado
  const main = document.querySelector('input[name="main"]:checked').value;
  // Obtém o valor do campo de texto 'observations'
  const observations = document.querySelector(
    'textarea[name="observations"]'
  ).value;

  // Inicializa a variável 'salad' para armazenar os valores das saladas selecionadas
  let salad = "";
  // Seleciona todos os checkboxes de saladas que estão marcados e concatena os valores na variável 'salad'
  document
    .querySelectorAll('input[name="salad"]:checked')
    .forEach(function (item) {
      salad += ", " + item.value;
    });

  // Imprime os valores obtidos no console do navegador
  console.log(name, address, breadType, main, observations);

  // Exibe um alerta com o resumo do pedido
  alert(
    "Pedido do Cliente:\n" +
      "Nome: " +
      name +
      "\nTipo do pão: " +
      breadType +
      " com " +
      main +
      salad +
      "\nEndereço para entrega: " +
      address +
      " \nObservação: " +
      observations
  );
});
