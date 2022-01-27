const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // encontro o funcionário correspondente ao parâmetro, e o 1o animal pelo qual ele é responsável;
  const findEmployee = employees.find((employee) => employee.id === id).responsibleFor[0];
  // com id do animal, uso find para retornar o array residents;
  const findAnimal = species.find((specie) => specie.id === findEmployee).residents;
  // usando o sort() para ordenar em ordem decrescente pela idade(do mais velho p/ o mais novo)
  const oldestAnimal = findAnimal.sort((a, b) => b.age - a.age);
  // com o map(), crio a array trazendo apenas os valores de cada chave;
  const resultado = oldestAnimal.map((element) => [element.name, element.sex, element.age]);
  // por fim, retorno apenas o 1o elemento desse array, onde está o animal mais velho;
  return resultado[0];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')); // Nigel

module.exports = getOldestFromFirstSpecies;
