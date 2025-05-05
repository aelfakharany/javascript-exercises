const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a, b) {
  
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(base, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(num) {
  let total = 1;
  for (let i = 0; i < num; i++) {
    total = total * (num - i);
  }
  return total;
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
