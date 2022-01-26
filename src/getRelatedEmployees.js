const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// console.log(data.employees.managers);

function isManager(id) {
  // retorna true se o id é de um gerente, e false se não
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // retornar um array com o nome dos colaboradores do gerente passado pelo id
  if (isManager(managerId)) {
    // filtro p/ encontrar os colaboradores sob responsabilidade do gerente
    const colaboradores = employees.filter((employee) => employee.managers.includes(managerId));
    return colaboradores.map((colaborador) => `${colaborador.firstName} ${colaborador.lastName}`);
  }
  // retorna um erro se o id não for de um gerente
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad')); // false
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992')); // true
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992')); // id gerente Stephanie

module.exports = { isManager, getRelatedEmployees };

// O método includes() determina se um array contém um elemento determinado, retornando  true ou  false apropriadamente.
// o filter() retorna um array com todos os elementosq satisfaçam a condição.
// o map() retornará um novo array com nome e sobrenome dos colaboradores, baseado no filtro dos colaboradores.
// não teria conseguido fazer esse exercícios sem ajuda dos amigos da sala (Kaique, Lili, Pedro, Philippe)
