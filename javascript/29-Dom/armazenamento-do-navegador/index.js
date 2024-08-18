// Session Storage

document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});

document.getElementById("readSesssion").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert("A informação salva é " + info);
});

// Session Storage

// Local Storage

document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  localStorage.setItem("text", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const ler = localStorage.getItem("text");
  alert("A texto salvo no local storege é " + ler);
});

//Cookies

document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  // cookieName=value; expiris=UTCStringDate; path/;
  const cookie = "infoCookie=" + input.value + ";";
  const expiration = "expires=" + new Date(2024, 8, 14) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(cookie);
});

document.getElementById("cookie2").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  // cookieName=value; expiris=UTCStringDate; path/;
  const cookie2 = "infoCookie2=" + input.value + ";";
  const expiration = "expires=" + new Date(2024, 8, 14) + ";";
  const path = "path=/;";
  document.cookie = cookie2 + expiration + path;
  input.value = "";
  console.log(cookie2);
});
