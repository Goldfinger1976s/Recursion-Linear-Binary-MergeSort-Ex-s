/*
Write a function that returns the factorial of a number. 
As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. 
The factorial of 1 is just 1.
Sample:
factorial(5); // 5 * 4 * 3 * 2 * 1 === 120
*/

function factorial(num) {
  let sum = 1;
  for (let i = num; i > 0; i--) {
    sum *= i;
  }
  return sum;
}

console.log(factorial(5));
console.log(factorial(9));

//recursive

function factorialRec(num){
    if(num == 1){
        return num;
    } else{
        return num *= factorialRec(num - 1)
    }
}

console.log(factorialRec(5));
console.log(factorialRec(9));