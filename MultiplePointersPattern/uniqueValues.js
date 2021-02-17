// Problem Statement
// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values
// in the array. There can be negative numbers in the array,
// but it will be sorted.

// Solutions
// O(n)
const countUniqueValues_MS = (sortedNums) => {
  let count = sortedNums.length ? 1 : 0;
  let left = 0;
  let right = 1;

  while (right < sortedNums.length) {
    if (sortedNums[left] !== sortedNums[right]) {
      count++;
    }
    left = right;
    right++;
  }

  return count;
};

// O(n)
const countUniqueValues = (sortedNums) => {
  if (!sortedNums.length) return 0;

  let left = 0;
  let right = 1;

  while (right < sortedNums.length) {
    if (sortedNums[left] !== sortedNums[right]) {
      left++;
      sortedNums[left] = sortedNums[right];
    }
    right++;
  }

  return left + 1;
};

// Test Cases
console.log('My Solution');
console.log(countUniqueValues_MS([1, 1, 1, 1, 2])); //2
console.log(
  countUniqueValues_MS([
    1,
    2,
    2,
    2,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    7,
    7,
    7,
    7,
    7,
    12,
    12,
    12,
    13,
    13,
    13,
  ])
); //7
console.log(countUniqueValues_MS([])); //0
console.log(countUniqueValues_MS([-4, -4, -2, -2, -2, 0, 1, 2, 4])); //6

// Test Cases
console.log('Course Solution');
console.log(countUniqueValues([1, 1, 1, 1, 2])); //2
console.log(
  countUniqueValues([
    1,
    2,
    2,
    2,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    7,
    7,
    7,
    7,
    7,
    12,
    12,
    12,
    13,
    13,
    13,
  ])
); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-4, -4, -2, -2, -2, 0, 1, 2, 4])); //6
