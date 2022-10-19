// const person = {
//   age: 25,
//   salary: 1_000,
// };

// const persons = [
//   {
//     age: parseInt(20 + Math.random() * 10),
//     salary: parseInt(600 + Math.random() * 2_000),
//   },
// ];

const persons = [];

const getPerson = () => {
  const randomNumber = Math.random();

  const age = parseInt(20 + randomNumber * 10);
  const salary = parseInt(600 + randomNumber * 2_000);

  return {
    age,
    salary,
  };
  // Galima rašyti ir taip, kaip below, bet geriau taip nedaryti:
  //   return {
  //     age: age,
  //     salary: salary,
  //   };
};

console.log(getPerson());
