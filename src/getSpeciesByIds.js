const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// console.log(data.species);

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((id) => species.find((specie) => specie.id === id));
}
console.log(getSpeciesByIds());
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

// ...ids é parâmetro rest, pq não sei qtos parâmetros vou receber, e estes parâmetros são salvos em array, por isso permitiu usar o map q irá retornar um array do mesmo tamanho do original(ids); a partir do map, usei find para procurar a especie com o id informado.

module.exports = getSpeciesByIds;
