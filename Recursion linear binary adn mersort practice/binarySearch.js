const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];


// Iterative function to implement Binary Search
const binarySearch = function (array, targetValue) {
  let min = 0;
  let max = array.length;
  let guess;
  console.log(`Size of Array = ${max}`)
  // Iterate while start not meets end
  while (min < max) {
    // Find the mid index
    guess = Math.floor((min + max) / 2);
    // If element is present at mid, return True
    if (array[guess] === targetValue) {
      return guess;
      // Else look in left or right half accordingly
    } else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  //console.log(min, guess);
  return -1;
};

const result = binarySearch(primes, 73);
console.log("Found prime at index " + result);

//linear search

function linearSearch(arr, value) {
  let i = 0;
  while (i < arr.length) {
    if (value === arr[i]) {
      return i;
    }
    i++;
  }
  return -1;
}

const result2 = linearSearch(primes, 73);
console.log("Found prime at index " + result2);
