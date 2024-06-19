function themeWith() {
  document.body.style.color = "#212529";
  document.body.style.backgroundColor = "#f1f5f9";
}

function themeBlack() {
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#212529";
}

function switchTheme() {
  // const h1 = document.getElementsByTagName("h1")[0]; // Seleciona o primeiro <h1>
  const h1 = document.querySelector("h1");
  h1.classList.toggle("is-light");
  h1.classList.toggle("is-dark");

  // document.body.classList.toggle("is-light");
  // document.body.classList.toggle("is-dark");
}

document.getElementById("lightBtn").addEventListener("click", themeWith);
document.getElementById("darkBtn").addEventListener("click", themeBlack);

document.getElementById("switchBtn").addEventListener("click", switchTheme);
