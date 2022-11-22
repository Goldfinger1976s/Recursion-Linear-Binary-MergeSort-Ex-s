/*
Write a function called all which accepts an array 
and a callback and returns true if every value in 
the array returns true when passed as parameter to the 
callback function

Sample:

var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false
*/

let allAreLessThanSeven = all([1, 3, 6, 8, 5, 3], function (num) {
  return num < 7;
});

console.log(allAreLessThanSeven); // false

function all(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
    //console.log(newArr);
  }
  return newArr.sort().reverse().pop();
}

//recursion

let allAreLessThanSevenRec = allRec([1, 3, 6, 8, 5, 3], function (num) {
  return num < 7;
});

console.log(allAreLessThanSevenRec); // false

function allRec(arr, callback) {
  let newArr = arr.slice();
  if (arr.length === 0) {
    return true;
  } else if (callback(newArr[0])) {
    newArr.shift();
    return all(newArr, callback);
  } else {
    return false;
  }
}
