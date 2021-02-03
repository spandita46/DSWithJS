// Problem
// Write a function called sumZero_MS which accepts a sorted array of intergers.
// The function should find the first pair where the sum is zero.
// Return an array that includes both values that sum to zero or undefined if
// such pair does not exist.

// has O(n^2)
const sumZero_MS = (sortedNumsArr) => {
  for (let i = 0; i < sortedNumsArr.length; i++) {
    let num = sortedNumsArr[i];
    if (num < 0) {
      for (let j = i + 1; j < sortedNumsArr.length; j++) {
        if (sortedNumsArr[j] + num == 0) {
          return [num, sortedNumsArr[j]];
        }
      }
    }
  }
};

// Time Complexity - O(n)
// Space Complexity - O(1)
const sumZero = (sortedNumsArr) => {
  let left = 0;
  let right = sortedNumsArr.length - 1;

  // Notice left < right check
  // Its not left <= right
  // With equal to sign, both pointers at some point of time
  // will refer to same element
  while (left < right) {
    let sum = sortedNumsArr[left] + sortedNumsArr[right];
    if (sum === 0) {
      return [sortedNumsArr[left], sortedNumsArr[right]];
    }

    if (sum < 0) {
      left++;
    } else if (sum > 0) {
      right--;
    }
  }
};

// Tests
console.log('My Solution');
console.log(sumZero_MS([-1, -2, -3, 0, 1, 2, 3, 4, 5])); // [-1, 1]
console.log(sumZero_MS([-4, -2, 0, 1, 3])); //undefined
console.log(sumZero_MS([1, 2, 3])); // undefined

// Tests
console.log('Course Solution');
console.log(sumZero([-1, -2, -3, 0, 1, 2, 3, 4, 5])); // [-1, 1]
console.log(sumZero([-4, -2, 0, 1, 3])); //undefined
console.log(sumZero([1, 2, 3])); // undefined
