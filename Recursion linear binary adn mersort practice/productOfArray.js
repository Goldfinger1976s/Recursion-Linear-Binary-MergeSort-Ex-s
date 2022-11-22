/*
Write a function called productOfArray which takes in an array of 
numbers and returns the product of them all

Sample:

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60
*/

let six = productOfArray([1, 2, 3]); // 6
let sixty = productOfArray([1, 2, 3, 10]); // 60

function productOfArray(arr) {
  let totalProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    totalProduct *= arr[i];
  }
  return totalProduct;
}

//console.log(six)
//console.log(sixty)

//recursion
let sixer = productOfArrayRec([1, 2, 3]); // 6
let sixtyer = productOfArrayRec([1, 2, 3, 10]); // 60


function productOfArrayRec(arr) {
  if (arr.length === 0) {
    return 1;
  } else {
    return arr[0] * productOfArrayRec(arr.slice(1));
  }
}

console.log(sixer);
console.log(sixtyer);
