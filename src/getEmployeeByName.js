const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return (
    employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName)
    );
}
console.log(getEmployeeByName());
console.log(getEmployeeByName('Emery'));

// se não tiver nada no parâmetro, returna objeto vazio {}
// usei find no objeto para encontrar o elemento de acordo com a condicional

module.exports = getEmployeeByName;
