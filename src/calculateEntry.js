const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // criando o objeto com a contagem dos visitantes por faixa etária.
  const publico = {
    child: 0,
    adult: 0,
    senior: 0,
  }; // o filter retorna um array, e o length trouxe a quantidade dos visitantes.
  if (publico.child === 0) {
    publico.child = entrants.filter((entrant) => entrant.age < 18).length;
  }
  if (publico.adult === 0) {
    publico.adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  }
  if (publico.senior === 0) {
    publico.senior = entrants.filter((entrant) => entrant.age >= 50).length;
  }
  return publico;
}

function calculateEntry(entrants) {
  // Para uma string vazia, length é 0 (caso do objeto vazio como parâmetro {});
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const publico = countEntrants(entrants);
  const totalChild = data.prices.child * publico.child;
  const totalAdult = data.prices.adult * publico.adult;
  const totalSenior = data.prices.senior * publico.senior;
  return totalChild + totalAdult + totalSenior;
}

// salinha: Débora, Halister, Sophia, Anjel, gratidão pessoal _/\_
console.log(calculateEntry());
console.log(calculateEntry({}));
console.log(countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

module.exports = { calculateEntry, countEntrants };
