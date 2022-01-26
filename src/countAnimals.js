const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const counter = species.find((specieCurr) => specieCurr.name === animal.specie);
  if (animal.sex) {
    const resultado = counter.residents.filter((specie) => specie.sex === animal.sex);
    return resultado.length;
  }
  return counter.residents.length;
}
console.log(countAnimals());
console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'bears', sex: 'female' }));

// Usado reduce() p/retornar um único valor, o valorInicial de acc é um objeto vazio {}; a propriedade será o curr na chave name, que trará o nome do animal; e o valor será curr na chave residents(array), e trará a qtidade de elementos desse array;
// o find buscará o elemento no objeto species, que é igual a chave 'specie' passado no parâmetro; guardado na variável counter.
// o filter buscara buscará dentro da chave residents, o parâmetro 'sex' correspondente, e atributo length, trará a quantidade desses animais.
// gratidão Kaique e monitoria do Douglas, sem eles não teria conseguido resolver exercício.

module.exports = countAnimals;
