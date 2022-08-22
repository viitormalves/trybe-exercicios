const infoEmployees = (fullname) => {
  const email = fullname.toLowerCase().split(' ').join('_')
  return {fullname, email: `${email}@trybe.com`}
};

const newEmployees = (infoEmployees) => {
    const employees = {
      id1: infoEmployees('Pedro Guerra'),
      id2: infoEmployees('Luiza Drumond'),
      id3: infoEmployees('Carla Paiva'),
    }
    return employees;
  };


  console.log(newEmployees(infoEmployees));

  