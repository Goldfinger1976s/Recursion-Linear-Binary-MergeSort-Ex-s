/*
Parse a multi-dimensional array
Given a multi-dimensional integer array, return the total number of integers stored inside this array

Sample:

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
*/

let seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7

function totalIntegers(arr) {
  let newArr = arr.flat(2);
  newArr.forEach((element) => {
    if(true) // to finish
    return element 
  });
}

console.log(seven);
