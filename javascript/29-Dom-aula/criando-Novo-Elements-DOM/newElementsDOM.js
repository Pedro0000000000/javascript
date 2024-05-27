function addInput() {
  const ul = document.getElementById("inputs"); // Esta se referindo ao ID'inputs' do ul do HTML

  const newLi = document.createElement("li"); // Esta criando um elemento chamdo li.
  newLi.className = "list-item"; // Esta criando a classe do li.
  newLi.innerText = "New input: "; // Esta criando a name do li.

  const newImput = document.createElement("input"); // Esta criando um input.
  newImput.type = "text"; // Esta criando tipo do imput.
  newImput.name = "input"; // Esta criando a nome do imput

  newLi.appendChild(newImput); // Esta passando as informações do newInput para dentro do newLi.
  ul.appendChild(newLi); // Esta passando as informações do no newLi para dentro do ul
}
