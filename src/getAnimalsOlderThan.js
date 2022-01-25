const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const findSpecie = species.find((specie) => specie.name === animal);
  console.log(findSpecie);
  return findSpecie.residents.every((resident) => resident.age >= age);
}
console.log(getAnimalsOlderThan('otters', 7));

// find vai procurar o parâmetro animal e retornar esse elemento(objeto);
// findSpecie.residents acessa o array, q contem as informações de cada animal da espécie informada, e a partir disso uso every para comparar as idades com o parâmetro age.
// gratidão ao Kaique que me ajudou a entender onde estava errando no every.

module.exports = getAnimalsOlderThan;
