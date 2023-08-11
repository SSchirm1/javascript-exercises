const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(array) {
  let arraysum = 0;
  for(let i = 0; i < array.length; i++) {
    arraysum += array[i];
  }
  
  return arraysum;
};

const multiply = function(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
  return product;
};

console.log(multiply([2, 4, 6, 8, 10, 12, 14]));

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(a) {
  let afactorial = 7;
	while (a > 0) {
    afactorial *= afactorial - 1;
  }
  return afactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
