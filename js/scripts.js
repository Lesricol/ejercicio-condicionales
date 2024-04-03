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

const value = number => {
  if (number > 0) {
    console.log('positivo');
  } else if (number < 0) {
    console.log('negativo');
  } else if (number === 0) {
    console.log('cero');
  }
};
value(2);

const getAverage = (numberA, numberB, numberC) => {
  const average = (numberA + numberB + numberC) / 3;
  if (average >= 0 && average < 5) {
    console.log('Suspenso');
  } else if (average >= 5 && average <= 8) {
    console.log('Aprobado');
  } else {
    console.log('Matrícula de honor');
  }
};
getAverage(10, 9, 9);

const biggerNumber = (numberA, numberB, numberC) => {
  if (numberA > numberB && numberA > numberC) {
    console.log(numberA);
  }
  if (numberB > numberA && numberB > numberC) {
    console.log(numberB);
  } else if (numberC > numberA && numberC > numberB) {
    console.log(numberC);
  }
};
biggerNumber(4, 5, 6);

const isDivisibleByThreeOrFive = number => {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('Es divisible por 3 y 5');
  } else if (number % 5 === 0) {
    console.log('Es divisible por 5');
  } else if (number % 3 === 0) {
    console.log('Es divisible por 3');
  } else {
    console.log(number);
  }
};
isDivisibleByThreeOrFive(30);

const evenOrOdd = number => {
  if (number === 0) {
    console.log('Es cero');
  } else if (number % 2 === 0) {
    console.log('Es un número par');
  } else {
    console.log('Es un número impar');
  }
};
evenOrOdd(10);

const year = number => {
  if ((number % 4 === 0 && number % 100 !== 0) || number % 400 === 0) {
    console.log('Es año bisiesto');
  } else {
    console.log('No es año bisiesto');
  }
};
year(2024);

const additionOfValues = (numberA, numberB) => {
  if (typeof numberA === 'string') {
    numberA = Number(numberA);
  }
  if (typeof numberB === 'string') {
    numberB = Number(numberB);
  }
  console.log(numberA + numberB);
};
additionOfValues(9, '5');
