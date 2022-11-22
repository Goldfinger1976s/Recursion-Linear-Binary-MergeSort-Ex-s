/*
Write a function called sumRange. 
It will take a number and return the sum of all numbers from 1 up to the number passed in.
Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
*/

function sumRange(range) {
  let count = 0;
  for (let i = range; i > 0; i--) {
    count += i;
  }

  return count;
}

console.log(sumRange(3));

//recursion version

function sumRangeRec(range) {
  if (range == 1) {
    return 1;
  } else {
    return range + sumRangeRec(range - 1);
  }
}

console.log(sumRangeRec(3));
