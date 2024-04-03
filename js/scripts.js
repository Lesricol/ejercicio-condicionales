const isAdult = (name, age) => {
  if (age >= 18) {
    console.log("Hola " + name + ", " + "eres mayor de edad");
  } else {
    console.log("Hola " + name + ", " + "eres menor de edad");
  }
};
isAdult("Ales", 18);

const number = (numberA, numberB) => {
  if (numberA > numberB) {
    console.log(numberA);
  } else {
    console.log(numberB);
  }
};
number(7, 8);

const value = (numberC) => {
  if (numberC >= 1) {
    console.log("positivo");
  } else if (numberC <= -1) {
    console.log("negativo");
  } else if (numberC === 0) {
    console.log("cero");
  }
};
value(-7);

const getAverage = (numberD, numberE, numberF) => {
  if (
    numberD + numberE + numberF / 3 >= 0 &&
    numberD + numberE + numberF / 3 <= 4
  ) {
    console.log("Suspenso");
  } else if (
    numberD + numberE + numberF / 3 >= 5 ||
    numberD + numberE + numberF / 3 <= 8
  ) {
    console.log("Aprobado");
  } else if (numberD + numberE + numberF / 3 >= 8) {
    console.log("Matrícula de honor");
  }
};
getAverage(0, 5, 5);

const biggerNumber = (numberG, numberH, numberI) => {
  if (numberG > numberH && numberI) {
    console.log(numberG);
  }
  if (numberH > numberG && numberI) {
    console.log(numberH);
  } else if (numberI > numberG && numberH) {
    console.log(numberI);
  }
};
biggerNumber(4, 5, 6);
