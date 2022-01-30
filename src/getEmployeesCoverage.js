const data = require('../data/zoo_data');

// procurar funcionário
function findEmployee(param) {
  // comparando se parâmetro name ou id coincidem com as infs do objeto employees, e a partir disso, criando objeto com as infs solicitadas.
  const findPerson = data.employees.find((employee) => employee.firstName === param.name
    || param.name === employee.lastName || employee.id === param.id);
  const newObject = {
    id: findPerson.id,
    fullName: `${findPerson.firstName} ${findPerson.lastName}`,
    species: findPerson.responsibleFor.map((animal) => data.species.find((specie) => specie
      .id === animal).name),
    locations: findPerson.responsibleFor.map((animal) => data.species.find((specie) => specie
      .id === animal).location),
  };
  // dentro do map() uso find() p/sair do obj employees e acessar o obj species, para buscar as infs ref aos animais.
  return newObject;
}

// sem parâmetro
function withoutParam() {
  const allEmployee = [];
  // forEach() acessa obj employees e a partir dele, busco as infs dos funcionários para compor a variavel allEmployee, através da variável newObject2.
  data.employees.forEach((employee) => {
    const newObject2 = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor.map((animal) => data.species.find((specie) => specie
        .id === animal).name),
      locations: employee.responsibleFor.map((animal) => data.species.find((specie) => specie
        .id === animal).location),
    };
    allEmployee.push(newObject2);
  });
  return allEmployee;
}

function getEmployeesCoverage(parametro) {
  if (!parametro) return withoutParam();
  const findPerson = data.employees.find((employee) => employee.firstName === parametro.name
    || parametro.name === employee.lastName || employee.id === parametro.id);
  if (!findPerson) throw new Error('Informações inválidas');
  if (parametro.name || parametro.id) return findEmployee(parametro);
}

// console.log(findEmployee({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// console.log(withoutParam());
// console.log(getEmployeesCoverage({id: 'ig0kd0eke0'}));

module.exports = getEmployeesCoverage;
