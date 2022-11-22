/*
On input of n elements
    if n < 2
        return
    else 
        sort left half of elements
        sort right half of the elements
        merge sorted halves;
*/


function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const half = arr.length / 2;
  const left = arr.slice(0, half);
  const right = arr.slice(half);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
  const mergedHalves = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      mergedHalves.push(leftArr[0]);
      leftArr.shift();
    } else {
      mergedHalves.push(rightArr[0]);
      rightArr.shift();
    }
  }
  while (rightArr.length > 0) {
    mergedHalves.push(rightArr[0]);
    rightArr.shift();
  }
  while (leftArr.length > 0) {
    mergedHalves.push(leftArr[0]);
    leftArr.shift();
  }

  return mergedHalves;
}

console.log(mergeSort([2,6,3,9,1,5,4,8,7]));
