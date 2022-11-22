/*
fn = fn-1 + fn-2
answer [0, 1, 1, 2, 3, 5, 8, 13]

*/

// let newArr = [];
// function fibs(num) {
//   let a = 0;
//   let b = 1;
//   let storedNum;

//   for (let i = 0; i < num; i++) {
//     storedNum = a;
//     a = a + b;
//     b = storedNum;
//     newArr.push(b);
//   }
//   return newArr;
// }
let fib = [0, 1];
let data = [];

function fibs(num) {
  for (let i = 0; i < num; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2];
    data.push(fib[i]);
  }
  return data;
}

console.log(fibs(8));

//recursive

let newArrRec = [];

function fibsRec(num) {
  if (num === 2) {
    return [0, 1];
  } else {
    let arr = fibsRec(num - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}

//fibsRec(8)
console.log(fibsRec(8));

function fibonacci(n){
  if(n < 2){
    return n
  }else{
    return (fibonacci(n-1) + fibonacci(n-2));
  }
}

console.log(fibonacci(7))