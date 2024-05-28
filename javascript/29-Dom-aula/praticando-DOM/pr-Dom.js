function addContact() {
  const contactSection = document.getElementById("contacts-list");

  const h3 = document.createElement("h3");
  h3.innerText = "Contato";

  const ul = document.createElement("ul");

  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "fullname";

  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);
  ul.appendChild(document.createElement("br"));

  const phoneLi = document.createElement("li");
  phoneLi.innerText = "Telephone: ";
  const phoneInput = document.createElement("input");
  phoneInput.type = "text";
  phoneInput.name = "phoneImput";

  phoneLi.appendChild(phoneInput);
  ul.appendChild(phoneLi);
  ul.appendChild(document.createElement("br"));

  const addressLi = document.createElement("li");
  addressLi.innerText = "address: ";
  const addressInput = document.createElement("input");
  addressInput.typo = "text";
  addressInput.name = "addressInput";

  addressLi.appendChild(addressInput);
  ul.appendChild(addressLi);
  // ul.appendChild(document.createElement("br"));

  contactSection.append(h3, ul);
}

function deletedContact() {
  const contactSecion = document.getElementById("contacts-list");

  const titles = document.getElementsByTagName("h3");
  const contacts = document.getElementsByTagName("ul");

  const remover = parseFloat(prompt("qual dos contatos você deseja remover?"));
  contactSecion.removeChild(titles[remover - 1]);
  contactSecion.removeChild(contacts[remover - 1]);
  // contactSecion.removeChild(titles[0]);
  // contactSecion.removeChild(contacts[0]);
  // contactSecion.removeChild(titles[titles.length - 1]);
  // contactSecion.removeChild(contacts[contacts.length - 1]);
}
