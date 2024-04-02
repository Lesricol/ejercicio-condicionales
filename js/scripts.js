const isAdult = (name, age) => {
  if (age >= 18) {
    console.log('Hola ' + name + ', ' + 'eres mayor de edad');
  } else {
    console.log('Hola ' + name + ', ' + 'eres menor de edad');
  }
};
isAdult('Ales', 18);

const number = (numberA, numberB) => {
  if (numberA > numberB) {
    console.log(numberA);
  } else {
    console.log(numberB);
  }
};
number(7, 8);
