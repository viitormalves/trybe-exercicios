const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(numbers); // [ 1, 2, 3 ]

//--------------------------------------------------------------

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months); /* [
//   'JAN', 'FEV', 'MAR',
//   'ABR', 'MAI', 'JUN',
//   'JUL', 'AGO', 'SET',
//   'OUT', 'NOV', 'DEZ'
// ] */

//--------------------------------------------------------------

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76

//--------------------------------------------------------------

const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, ...about };
  //console.log(customer);
//{
//     id: 101,
//     name: 'Alysson',
//     age: 25,
//     address: 'Av. Getúlio Vargas, 1000',
//     occupation: 'Developer'
//   }

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['laranha', 'maçã', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'groselha', 'suco'];

const fruitSalad = (fruit, additional) => {
    return [...specialFruit, ...additionalItens]
};

console.log(fruitSalad(specialFruit, additionalItens));