const nomeTurista = prompt("E ai, turista, qual é o seu nome? ");
let numberCityVisits = 0;
let cityVisitys = "";

let vistCity = prompt(
  "E aí " + nomeTurista + " você já visitou alguma cidade? (Sim/Não)"
);

while (vistCity == "Sim") {
  let cityVisityss = prompt(
    "E aí " + nomeTurista + " qual cidade você já visitou? "
  );
  numberCityVisits++;
  cityVisitys += numberCityVisits + " - " + cityVisityss + "\n";
  vistCity = prompt(
    nomeTurista + " você visitou alguma outra cidade? (Sim/Não)"
  );
}

if (vistCity == "Não") {
  alert(
    "Nome do turista: " +
      nomeTurista +
      "\n" +
      numberCityVisits +
      " cidades visitada: " +
      "\n" +
      cityVisitys
  );
}
