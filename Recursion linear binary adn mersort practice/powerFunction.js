/*
Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
Sample:
console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1
*/

function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}

console.log(power(2, 4));
console.log(power(2, 3));
console.log(power(2, 2));
console.log(power(2, 1));
console.log(power(2, 0));

function powerRec(base, exp) {
  if (exp == 1) {
    return base;
  } else {
    return base * power(base, exp - 1);
  }
}

console.log(powerRec(2, 4));
console.log(powerRec(2, 3));
console.log(powerRec(2, 2));
console.log(powerRec(2, 1));
console.log(powerRec(2, 0));
