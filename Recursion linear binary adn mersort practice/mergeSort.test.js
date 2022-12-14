const mergeSort = require("./mergeSort");

test('Providing non-array value returns "Please pass in an array of numbers"', () => {
  expect(mergeSort("a")).toBe("Please pass in an array of numbers");
});

test('Passing in an array of non-numbers returns "Please pass in an array of numbers', () => {
  expect(mergeSort(["a", "b"])).toBe("Please pass in an array of numbers");
});

test("Passing in an array with only one member returns the same array", () => {
  expect(mergeSort([1])).toStrictEqual([1]);
});

test("Array with two values gets sorted", () => {
  expect(mergeSort([3, 2])).toStrictEqual([2, 3]);
});

test("Even array w/o duplicates gets sorted correctly", () => {
  expect(mergeSort([3, 2, 1, 7])).toStrictEqual([1, 2, 3, 7]);
});

test("Odd array w/o duplicates gets sorted correctly", () => {
  expect(mergeSort([3, 2, 1, 7, 5])).toStrictEqual([1, 2, 3, 5, 7]);
});

test("Array with duplicates gets sorted correctly", () => {
  expect(mergeSort([3, 2, 1, 3, 7, 5])).toStrictEqual([1, 2, 3, 3, 5, 7]);
});
