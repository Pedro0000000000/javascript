// Importando uma função exportada nomeadamente do arquivo "inline.js"
import { inline } from "./inline.js";

// Importando a exportação default do arquivo "inline.js"
import defaultInline from "./inline.js";

// Importando a exportação default do arquivo "non-inline.js"
import exportDefault from "./non-inline.js";

// Importando múltiplas funções nomeadas do arquivo "non-inline.js"
import { group, a, b, c, d } from "./non-inline.js";

// Chamando a função importada nomeadamente de "inline.js"
inline();

// Chamando a função default importada de "inline.js"
defaultInline();

// Chamando a função agrupada nomeadamente de "non-inline.js"
group();

// Chamando as funções individuais importadas de "non-inline.js"
a(3);
b(2);
c(6);
d(12);

// Chamando a função default importada de "non-inline.js"
exportDefault();
